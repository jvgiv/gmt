import { NextResponse } from 'next/server';
import { removeCartLines, serializeCart } from '@/app/lib/shopifyCart';

export async function POST(request) {
  try {
    const { lineId } = await request.json();
    const cartId = request.cookies.get('shopifyCartId')?.value;

    if (!cartId) {
      return NextResponse.json({ error: 'No active cart found.' }, { status: 400 });
    }

    if (!lineId) {
      return NextResponse.json({ error: 'A cart line is required.' }, { status: 400 });
    }

    const updatedCart = await removeCartLines(cartId, [lineId]);
    const response = NextResponse.json({ cart: serializeCart(updatedCart) });

    if (!updatedCart?.lines?.edges?.length && !updatedCart?.totalQuantity) {
      response.cookies.set('shopifyCartId', '', {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      });
    }

    return response;
  } catch (error) {
    console.error('Remove cart line error:', error);
    return NextResponse.json(
      { error: error.message || 'Unable to update your cart right now.' },
      { status: 500 }
    );
  }
}
