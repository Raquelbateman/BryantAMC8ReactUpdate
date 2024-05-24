import { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Blue Cheese Olives', quantity: 1 },
      { id: 2, title: 'Orange Juice', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    }));
  };

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Update Cart</button>
    </>
  );
};

export default Cart;