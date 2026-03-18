import { NextResponse } from 'next/server';
import { serializeCart, updateCartLines } from '@/app/lib/shopifyCart';

export async function POST(request) {
  try {
    const { lineId, quantity } = await request.json();
    const cartId = request.cookies.get('shopifyCartId')?.value;

    if (!cartId) {
      return NextResponse.json({ error: 'No active cart found.' }, { status: 400 });
    }

    if (!lineId || !Number.isInteger(quantity) || quantity < 1) {
      return NextResponse.json(
        { error: 'A valid line item and quantity are required.' },
        { status: 400 }
      );
    }

    const updatedCart = await updateCartLines(cartId, [{ id: lineId, quantity }]);

    return NextResponse.json({ cart: serializeCart(updatedCart) });
  } catch (error) {
    console.error('Update cart error:', error);
    return NextResponse.json(
      { error: error.message || 'Unable to update your cart right now.' },
      { status: 500 }
    );
  }
}
