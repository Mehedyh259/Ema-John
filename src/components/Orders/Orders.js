import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {

    const navigate = useNavigate()
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className="all-products">
                <div className="review-container">
                    {
                        cart.map((product) => <ReviewItem
                            key={product._id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct} ></ReviewItem>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={() => navigate('/shipment')}>Proceed Shipping</button>

                </Cart>
            </div>

        </div>
    );
};

export default Orders;