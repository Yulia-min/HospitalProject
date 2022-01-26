import React from "react";
import {Checkbox} from '../checkbox/Checkbox';

const Symptoms = ({item, setSymptoms, setIsDisabled}) =>{

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
        <div className="checkbox__item">
                <div className="checkbox__photo">
                    <img src={item.image}/>
                </div>
            <div className="checkbox__text">{item.value}</div>
            <Checkbox id={item.id} handleChange={handleChange}/>    
        </div>
    )
}

export default Symptoms;