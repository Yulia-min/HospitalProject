import React, {useCallback, useState} from "react";
import ChoiceStyle from "../choice/ChoiceStyle.css";
import first from "../../image/first.png";
import second from "../../image/second.png";
import third from "../../image/third.png";
import forth from "../../image/forth.png";
import fifth from "../../image/fifth.png";
import sixth from "../../image/sixth.png";
import seventh from "../../image/seventh.png";
import eith from "../../image/eith.png";
import ninth from "../../image/ninth.png";
import tenth from "../../image/tenth.png";
import { SYMPTOM_ID, SYMPTOM_NAME } from "../../constants";
    
const Checkbox = ({label, id, handleChange, checked}) => (
    <div className="checkbox__input">
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
);  

const symptomsList = [
    {id:SYMPTOM_ID.COVID ,image:first, value:SYMPTOM_NAME[SYMPTOM_ID.COVID]},
    {id:SYMPTOM_ID.FEVER, image:second, value:SYMPTOM_NAME[SYMPTOM_ID.FEVER]},
    {id:SYMPTOM_ID.COUGH, image:third, value:SYMPTOM_NAME[SYMPTOM_ID.COUGH]},
    {id:SYMPTOM_ID.SORE, image:forth, value:SYMPTOM_NAME[SYMPTOM_ID.SORE]},
    {id:SYMPTOM_ID.CONGESTION, image:fifth, value:SYMPTOM_NAME[SYMPTOM_ID.CONGESTION]},
    {id:SYMPTOM_ID.EYE, image:sixth, value:SYMPTOM_NAME[SYMPTOM_ID.EYE]},
    {id:SYMPTOM_ID.EAR, image:seventh, value:SYMPTOM_NAME[SYMPTOM_ID.EAR]},
    {id:SYMPTOM_ID.URINATION, image:eith, value:SYMPTOM_NAME[SYMPTOM_ID.URINATION]},
    {id:SYMPTOM_ID.RASH, image:ninth, value:SYMPTOM_NAME[SYMPTOM_ID.RASH]},
    {id:SYMPTOM_ID.OTHER, image:tenth, value:SYMPTOM_NAME[SYMPTOM_ID.OTHER]},
];

function Choice(props){

    const handleChange = (e) => {
        const {value, checked} = e.target;
        if(checked){
            props.setSymptoms((prev)=>[...prev,value]);       
        }else {
            props.setSymptoms((prev)=>prev.filter((item) => item !== value ));
        }
    };

    return(
        <div className="checkbox">
            <div className="checkbox__full">
                {
                    symptomsList.map((item) => (
                        <div className="checkbox__item">
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