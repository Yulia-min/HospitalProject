import React from "react";

function NextButton({isDisabled}){
    return(
        <div className="button__next">
            <button onClick={() => console.log('click')} type="button" disabled={isDisabled}>Next</button>
        </div>
    )
}

export default NextButton;