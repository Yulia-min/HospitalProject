import React from "react";
import "../FullProfyleStyle.css";
import FamilyItem from "./FamilyItem";

const FamilyProfile = ({handleChange, familyList}) =>{ 
      
    return(
        <>        
            <div className="full__checkbox">
                <div className="checkbox__input">          
                    <input
                        id="familySelect"
                        type="checkbox"
                        name="familySelect"
                        checked={!familyList.some((person) => person?.isChecked !== true)}
                        onChange={handleChange}
                    />
                    <label htmlFor="familySelect"></label>
                </div>
                <div className="full__checkbox__text">Family</div>
            </div>     
            {
                familyList.filter(person => person.relation === 'family')
                    .map((person) => (
                        <FamilyItem person={person} handleChange={handleChange}/>
                    )
                )
            }
        </>
    )
}

export default FamilyProfile