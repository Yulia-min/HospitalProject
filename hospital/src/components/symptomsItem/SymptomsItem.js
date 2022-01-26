import React from "react";
import {SYMPTOM_NAME} from '../../constants'

function SyptomsItem({item}){
    return(
        <div item={item} className="profile__checkbox__item">
            {SYMPTOM_NAME[item]}
        </div>
    )
}

export default SyptomsItem;