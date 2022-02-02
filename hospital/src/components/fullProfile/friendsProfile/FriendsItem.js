import React from "react";
import profilePhoto from '../../../image/profile.png';
import "../FullProfyleStyle.css";
import vector from "../../../image/Vector.png";

const FriendsItem = ({person, handleChange}) =>{ 

    return(
        <div className="profile"  key={person.id}> 
            <div className="profile__full">
                <div className="profile__checkbox">
                    <div className="checkbox__input">
                        <input
                            id={person.id}
                            type="checkbox"
                            name={person.name}
                            checked={person?.isChecked || false}
                            onChange={handleChange}
                        />
                        <label htmlFor={person.id}></label>
                    </div>
                </div>
                <div className="profile__photo">
                    <img src={profilePhoto}/>
                </div>
                <div className="profile__info">
                    <div key={person.id}>
                        <div className="profile__name">{person.name} {person.surname}</div>
                        <div className="profile__data">DOB: {person.birthday}</div>
                        <div className="profile__number">{person.phone}</div>
                        <div className="profile__email">{person.email}</div>
                    </div>
                </div>
            </div>
            <div className="profile__block">
                <img src={vector}/>
                <div className="profile__edit__text">Edit</div>
            </div>
        </div>
    )
}

export default FriendsItem;