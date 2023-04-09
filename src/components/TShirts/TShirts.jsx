import React from 'react';

const TShirts = ({tshirt}) => {
    const {name, price, picture, gender} = tshirt
    return (
        <div>
            <img src={picture} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default TShirts;