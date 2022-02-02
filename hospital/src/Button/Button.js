import React from "react";
import "./ButtonStyle.css";
import CancelButton from "./CancelButton/CancelButton";
import NextButton from "./NextButtom/NextButton";

function Button({isDisabled}){
    return(
        <div className="button">
            <div>
                <CancelButton/>
            </div>
            <div className="two__buttons">
                <CancelButton/>
                <NextButton isDisabled={isDisabled}/>
            </div>
        </div>
    )
}

export default Button;