import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(props);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total += (product.price * product.quantity);
        shipping += product.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            {
                props.children ? props.children : ''
            }
        </div>
    );
};

export default Cart;