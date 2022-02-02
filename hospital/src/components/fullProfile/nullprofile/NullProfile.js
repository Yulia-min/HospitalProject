import React from "react";
import {data} from '../../data';
import "../FullProfyleStyle.css"
import NullItem from "./NullItem";

const NullProfile = ({handleChange}) =>{ 

    return(
        <> 
            <div className="profile__text__1">You</div>
            {
                data.filter(item => item.relation === null)
                .map(item => 
                      <NullItem item={item} handleChange={handleChange}/>
                )
            }
        </>        
    )
}

export default NullProfile;