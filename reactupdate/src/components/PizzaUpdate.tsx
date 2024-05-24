import { useState } from "react";


const PizzaUpdate = () => {
  const [pizza, setPizza] = useState({
    name: 'The Ghostface Special',
    toppings:['Pepperoni ',' Black Olives']

  });

  const handleClick = () => {    
  setPizza({...pizza, toppings:[...pizza.toppings, ' Cheese']})


  }
  return (
    <>
    <span>Pizza name: {pizza.name}</span><br></br>
    <span>Pizza toppings: {pizza.toppings}</span> <br></br>
    <button onClick={handleClick}>Add Black Olives</button>
    
    
    
    </>
  )
}

export default PizzaUpdate