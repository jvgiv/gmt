import { NextResponse } from 'next/server';
import { addCartLines, createCart, getCart, serializeCart } from '@/app/lib/shopifyCart';

export async function POST(request) {
  try {
    const { variantId, quantity } = await request.json();

    if (!variantId || !Number.isInteger(quantity) || quantity < 1) {
      return NextResponse.json(
        { error: 'A valid variant and quantity are required.' },
        { status: 400 }
      );
    }

    const existingCartId = request.cookies.get('shopifyCartId')?.value;
    const existingCart = existingCartId ? await getCart(existingCartId) : null;
    const cart = existingCart?.id ? existingCart : await createCart();

    if (!cart?.id) {
      return NextResponse.json({ error: 'Unable to create a cart.' }, { status: 500 });
    }

    const updatedCart = await addCartLines(cart.id, [{ merchandiseId: variantId, quantity }]);

    const response = NextResponse.json({
      cart: serializeCart(updatedCart),
    });

    response.cookies.set('shopifyCartId', updatedCart?.id ?? cart.id, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error('Add to cart error:', error);
    return NextResponse.json(
      { error: error.message || 'Unable to add this item to your cart right now.' },
      { status: 500 }
    );
  }
}
