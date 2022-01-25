import React from "react";
import Choice from "../components/choice/Choice";
import Comment from "../components/comment/Comment";

export const SymptomsList = ({symptoms, setSymptoms, comment, setComment, isDisabled, setIsDisabled}) =>{

    return(
        <>
            <Choice setSymptoms={setSymptoms} symptoms={symptoms} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/> 
            {
                !!symptoms.length && (
                    <Comment setComment={setComment} comment={comment}/>
                )
            }
        </>
    )
}