import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product: Blue Cheese Olives', quantity: 1 },
      { id: 2, title: 'Product: Orange Juice', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart((oldCart) => ({
      ...oldCart,
      items: oldCart.items.map((item) =>
        item.id == 1 ? { ...item, quantity: item.quantity+1 } : item
      ),
    }));
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <span>{cart.items[0].title}:</span>
      <span>{cart.items[0].quantity}</span>
      
      <button onClick={handleClick}>Add To Cart</button>
    </>
  );
};

export default Cart;