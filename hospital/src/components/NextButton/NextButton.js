import React from "react";
import "../NextButton/NextButtonStyle.css";

function NextButton({isDisabled}){
    return(
        <div className="button">
            <div className="button__cancel">
                <button>Cancel</button>
            </div>
            <div className="button__next">
                <button onClick={() => console.log('click')} type="button" disabled={isDisabled}>Next</button>
            </div>
        </div>
    )
}

export default NextButton;