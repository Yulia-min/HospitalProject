import React from "react";
import NextButtonStyle from "../NextButton/NextButtonStyle.css"

function NextButton(){
    return(
        <div className="button">
            <div className="button__cancel">
                <button>Cancel</button>
            </div>
            <div className="button__next">
                <button type="button">Next</button>
            </div>
        </div>
    )
}

export default NextButton;