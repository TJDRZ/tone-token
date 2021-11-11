import React, { useState, useEffect } from "react";
import Input from './Input';

function Card(props) {
    const [cardName, setCardName] = useState('');
    useEffect(() => {
        props.getName(cardName)
    }, [cardName, props]);

    return (
        <div className="Card">
            <Input type="text" name={"Pedalboard Name"} placeholder="Enter a pedalboard name" lift={setCardName} />
        </div>
    );
}

export default Card;