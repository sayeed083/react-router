import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let giveAMessage;
    if(cart.length === 0){
        giveAMessage = <p>Please add Some Products</p>
    }
    else {
        giveAMessage = <h3>Thanks</h3>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            
            {giveAMessage}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}

                    <button onClick={() => handleRemoveFromCart(tshirt._id)} className='mt-4 bg-slate-400 text-white py-2 px-4 rounded'>x</button>
                </p>)
            }

        </div>
    );
};

export default Cart;



//Conditional Rendering Rules :
//*1) Use if else to set a variable that will contain an element, components.
//*2) Ternary :  Condition ? 'true value' : 'false'