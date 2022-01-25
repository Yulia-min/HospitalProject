import React from "react";
import "./ButtonStyle.css";
import CancelButton from "./CancelButton/CancelButton";
import NextButton from "./NextButtom/NextButton";

function Button({isDisabled}){
    return(
        <div className="button">
            <CancelButton/>
            <NextButton isDisabled={isDisabled}/>
        </div>
    )
}

export default Button;