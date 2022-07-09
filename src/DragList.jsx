import React, { useState } from "react";
import Drag from "./Drag";

export default () => {
    const [items, setItems] = useState(new Array(10).fill('Item').map((text, i) => `${text} ${i + 1}`));

    const onMoveEffect = (targetItem) => {
        if (items.includes(targetItem)) {
            setItems((items) => items.filter((item) => item !== targetItem))
        }
    }

    return (
        <div className="item-container">
            {items.map((item) => 
                <Drag key={item} dataItem={item} dropEffect="move" onMoveEffect={onMoveEffect}>
                    <div className="item">{item}</div>
                </Drag>
            )}
        </div>
    );
};
