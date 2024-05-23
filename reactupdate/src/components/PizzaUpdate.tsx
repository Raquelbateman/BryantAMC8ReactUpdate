import { useState } from "react";







const PizzaUpdate = () => {
  const [pizza, setPizza] = useState({
    name: 'The Ghostface Special',
    toppings:['Pepperoni','Cheese']

  });

  const handleClick = () => {    
  setPizza({...pizza, toppings:[...pizza.toppings, 'Black Olives']})


  }
  return (
    <>
    <span>pizza toppings: {pizza.toppings}</span>  
    <button onClick={handleClick}>Add Black Olives</button>
    
    
    
    </>
  )
}

export default PizzaUpdate