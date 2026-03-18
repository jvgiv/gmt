import { NextResponse } from 'next/server';
import { getCart, serializeCart } from '@/app/lib/shopifyCart';

export async function GET(request) {
  try {
    const cartId = request.cookies.get('shopifyCartId')?.value;

    if (!cartId) {
      return NextResponse.json({ cart: null });
    }

    const cart = await getCart(cartId);
    const response = NextResponse.json({ cart: serializeCart(cart) });

    if (!cart) {
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
    console.error('Get cart error:', error);
    return NextResponse.json(
      { error: 'Unable to load your cart right now.' },
      { status: 500 }
    );
  }
}
