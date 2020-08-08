import React from "react";
import s from "./style/CommentBlock.module.css";
import { HorizontalSpacer } from "../../Components/common/inCard/HorizontalSpacer";

const CommentBlock = (props) => {
    let dateTransform = new Date(props.date);

    return (
        <HorizontalSpacer>
            <div className={s.header}>
                <h4>{props.name}</h4>
                <p>{dateTransform.toLocaleDateString()}</p>
            </div>
            <p className={s.commentText}>{props.comment}</p>
        </HorizontalSpacer>
    );
}

export {
    CommentBlock
}