import React, {useState} from "react";
import "../comment/CommentStyle.css";

function Comment(props){

    const handleInput = e => {
        props.setComment(e.target.value);
    };

    return(
        <div className="comment">
            <textarea placeholder=" " onChange={(e)=>{handleInput(e)}}></textarea>
            <label>Please describe how you're feeling</label>
        </div>
    )
}

export default Comment;