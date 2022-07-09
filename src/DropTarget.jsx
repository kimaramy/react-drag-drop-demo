import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const DropTarget = props => {
    const [isDropped, setIsDropped] = React.useState(false);

    const handleDrop = e => {
        const droppedItem = e.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onDrop(droppedItem);
        }
        setIsDropped(false);
    };

    const handleDragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = props.dropEffect;
        setIsDropped(true);
    };

    const handleDragLeave = () => setIsDropped(false);

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            style={{ width: "100%", height: "100%", ...(isDropped ? insideStyle : {}) }}
        >
            {props.children}
        </div>
    );
};

DropTarget.propTypes = {
    onDrop: PropTypes.func.isRequired,
    dropEffect: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

DropTarget.defaultProps = {
    dropEffect: dropEffects.All,
};

export default DropTarget;
