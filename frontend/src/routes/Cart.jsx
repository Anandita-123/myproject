import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        axios.get("http://localhost:3000/api/menu/veg")
        .then((res) => {
            const order = res.data.find((item) => item.id === itemId)
            setCartItems(
                [
                    ...cartItems,
                    order
                ]
            )
        })
        .catch((err) => console.error(err))
    },[])

    return (
        cartItems.length > 0 ? <div className='d-flex container gap-5 py-5'>
            <div className='d-flex align-items-center gap-3' style={{ flexWrap: "wrap" }}>
                {
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <CartItem id={item.id} image={item.image} title={item.title} price={item.price} qty={item.qty} />
                        </div>
                    ))
                }
            </div>
        </div> 
        : 
        <div className='container py-5 display-5 text-center'>Cart is Empty</div>
    )
}

export default Cart;
