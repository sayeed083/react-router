import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';

const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div>
            {
                tshirts.map (tshirt => <TShirts
                key={tshirt._id}
                tshirt={tshirt}
                >

                </TShirts>)
            }

        </div>
    );
};

export default Home;