import React from "react";
import profilePhoto from '../../../image/profile.png';
import "../FullProfyleStyle.css";
import vector from "../../../image/Vector.png";

const NullItem = ({item, handleChange}) =>{ 

    return(
        <div className="profile" key={item.id}> 
            <div className="profile__full">
                <div className="profile__checkbox">
                    <div className="checkbox__input">
                        <input 
                            id="nullSelect"
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <label htmlFor="nullSelect"></label>
                    </div>
                </div>
                <div className="profile__photo">
                    <img src={profilePhoto}/>
                </div>
                <div className="profile__info">
                    <div key={item.id}>
                        <div className="profile__name">{item.name} {item.surname}</div>
                        <div className="profile__data"> DOB: {item.birthday}</div>
                        <div className="profile__number">{item.phone}</div>
                        <div className="profile__email">{item.email}</div>
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

export default NullItem;