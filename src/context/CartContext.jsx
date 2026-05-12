import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🔥 INIT FROM LOCAL STORAGE
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔥 SAVE TO LOCAL STORAGE EVERY CHANGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {

    setCart((prev) => {

      const exist = prev.find(item => item.id === product.id);

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              qty: item.qty > 1 ? item.qty - 1 : 1
            }
          : item
      )
    );
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(item => item.id !== id)
    );
  };

  // CLEAR CART (BONUS 🔥)
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);