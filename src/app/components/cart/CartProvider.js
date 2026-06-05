'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function refreshCart() {
    try {
      setIsLoading(true);
      const response = await fetch('/api/cart', { cache: 'no-store' });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to load cart.');
      }

      setCart(payload.cart ?? null);
      return payload.cart ?? null;
    } catch (error) {
      console.error('Cart refresh error:', error);
      setCart(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    refreshCart();
  }, []);

  useEffect(() => {
    function handleWindowFocus() {
      refreshCart();
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        refreshCart();
      }
    }

    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const value = useMemo(
    () => ({
      cart,
      cartCount: cart?.totalQuantity ?? 0,
      isLoading,
      refreshCart,
      setCart,
    }),
    [cart, isLoading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
