import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Orange Juice', quantity: 1},
        {id: 2, title: 'Blue Cheese Olives', quantity: 1}
       ] 
    })

    const handleClick =() => {
       
    }
  return (
    <>
      {/* Title, show items, button to handle the update Update Cart  */}
      
    </>
  )
}

export default Cart
