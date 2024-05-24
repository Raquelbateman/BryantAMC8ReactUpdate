import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
       ] 
    })

    const handleClick =() => {
       
    }
  return (
    <div>
      {/* Title, show items, button to handle the update Update Cart  */}
      
    </div>
  )
}

export default Cart
