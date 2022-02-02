import React from "react";
import "../FullProfyleStyle.css";
import FriendsItem from "./FriendsItem";

const FriendsProfile = ({friendsList, handleChange}) =>{ 
    return(
        <>        
            <div className="full__checkbox">
                <div className="checkbox__input">          
                    <input
                        id="friendsSelect"
                        type="checkbox"
                        name="friendsSelect"
                        checked={!friendsList.some((person) => person?.isChecked !== true)}
                        onChange={handleChange}
                    />
                    <label htmlFor="friendsSelect"></label>
                </div>
                <div className="full__checkbox__text">Friends</div>
            </div>     
            {
                friendsList.filter(person => person.relation === 'friends')
                    .map((person) => (
                        <FriendsItem person={person} handleChange={handleChange}/>
                    )
                )
            }
        </>
    )
}

export default FriendsProfile