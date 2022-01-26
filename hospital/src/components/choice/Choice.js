import React from "react";
import "../choice/ChoiceStyle.css";
import { symptomsList } from "../../constants";
import Symptoms from "../symptoms/Symptoms";

function Choice({setSymptoms, setIsDisabled}){

    return(
        <div className="checkbox">
            <div className="checkbox__full">
                {
                    symptomsList.map((item, key) => (
                        <Symptoms item={item} key={key} setSymptoms={setSymptoms} setIsDisabled={setIsDisabled}/>
                    ))
                }
            </div>
        </div>    
    )
}

export default Choice;