import React from 'react';

const TShirts = ({tshirt, handleAddToCart}) => {
    const {name, price, picture, gender} = tshirt
    return (
        <div className='border p-10 rounded-2xl border-blue-300'>
            <img className='h-60 mx-auto rounded-2xl' src={picture} alt="" />
           <h4>{name}</h4>
           <p>Price : ${price}</p>
           <button onClick={() => handleAddToCart (tshirt)} className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'>Buy Now</button>
        </div>
    );
};

export default TShirts;