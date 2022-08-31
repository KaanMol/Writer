import React, { useRef } from "react";
import { CoreAPI } from "./core";
import { useDrag, useDrop, XYCoord } from "react-dnd";
import { Icon } from "./Icon";

interface DragItem {
    index: number;
    id: string;
    type: string;
}

export function Wrapper(props: { children: JSX.Element; id: string; index: number; reorder: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const [, drop] = useDrop<DragItem>(() => ({
        accept: "component",
        drop: () => console.log("move"),
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = props.index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            props.reorder(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    }));

    const [, drag] = useDrag(() => ({
        type: "component",
        item: () => {
            return { id: props.id, index: props.index };
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    drag(drop(ref));

    return (
        <>
            <div className="actions">
                <Icon icon="drag_indicator"></Icon>
            </div>
            <div ref={ref} className="wrapper" id={props.id}>
                {props.children}
            </div>
        </>
    );
}
