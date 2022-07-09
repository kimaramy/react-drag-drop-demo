import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const draggingStyle = {
    opacity: 0.25,
};

const Drag = props => {
    const [isDragging, setIsDragging] = React.useState(false);
    
    const image = React.useRef(null);

    React.useEffect(() => {
        image.current = null;
        if (props.dragImage) {
            image.current = new Image();
            image.current.src = props.dragImage;
        }
    }, [props.dragImage]);

    const handleDragStart = e => {
        setIsDragging(true);
        e.dataTransfer.setData("drag-item", props.dataItem);
        e.dataTransfer.effectAllowed = props.dropEffect;
        if (image.current) {
            e.dataTransfer.setDragImage(image.current, 0, 0);
        }
    };

    const handleDragEnd = e => {
        const dropEffect = e.dataTransfer.effectAllowed;
        if (dropEffect === dropEffects.Move) {
            props.onMoveEffect(props.dataItem);
        }
        setIsDragging(false);
    }

    return (
        <div style={isDragging ? draggingStyle : {}} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {props.children}
        </div>
    );
};

Drag.propTypes = {
    dataItem: PropTypes.string.isRequired,
    dragImage: PropTypes.string,
    dropEffect: PropTypes.string,
    onMoveEffect: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Drag.defaultProps = {
    dragImage: null,
    dropEffect: dropEffects.All,
    onMoveEffect: () => null,
};

export default Drag;
