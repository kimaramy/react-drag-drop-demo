import React from "react";
import DropTarget from "./DropTarget";

export default () => {
    const [items, setItems] = React.useState([]);

    const onDrop = item => setItems([...items, item]);

    return (
        <DropTarget onDrop={onDrop} dropEffect="move">
            <div className="item-container">
                {items.map(item => (
                    <div key={item} className="item">
                        {item}
                    </div>
                ))}
            </div>
        </DropTarget>
    );
};
