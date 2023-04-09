import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div>
            <h2 className='text-rose-600 text-4xl '>This is Home : {tshirts.length}</h2>
            
        </div>
    );
};

export default Home;