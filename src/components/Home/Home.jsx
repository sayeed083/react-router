import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirts from '../TShirts/TShirts';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();

    //Using State for get the Data in other Side
    const [cart, setCart] = useState([]);


    // Event Handler

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast.error('You Have Already added this T-Shirt')

        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='home-container grid gap-4 md:grid-cols-2 mt-8'>
            <div className='t-shirts container grid gap-4 md:grid-cols-3'>
                {
                    tshirts.map(tshirt => <TShirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    >
                    </TShirts>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;