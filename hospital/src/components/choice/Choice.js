import React from "react";
import "../choice/ChoiceStyle.css";
import { Checkbox } from "../checkbox/Checkbox";
import { symptomsList } from "../../constants";

function Choice({setSymptoms, setIsDisabled}){

    const handleChange = (e) => {
        const {value, checked} = e.target;
        if(checked){
            setIsDisabled(false);
            setSymptoms((prev)=>[...prev, value]);       
        }else {
            setSymptoms((prev)=>prev.filter((item) => item !== value ));
        }
    };

    return(
        <div className="checkbox">
            <div className="checkbox__full">
                {
                    symptomsList.map((item, key) => (
                        <div className="checkbox__item" key={key}>
                            <div className="checkbox__photo">
                                <img src={item.image}/>
                            </div>
                            <div className="checkbox__text">{item.value}</div>
                            <Checkbox id={item.id} handleChange={handleChange}/>    
                        </div>
                    ))
                }
            </div>
        </div>    
    )
}

export default Choice;