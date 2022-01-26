import React, { useEffect } from "react";
import profilePhoto from "../../image/profile.png";
import "../profile/ProfileStyle.css";
import SyptomsItem from "../symptomsItem/SymptomsItem";

const Profile = ({symptoms, comment, setComment}) => {

    useEffect(() => {
        if(symptoms.length === 0){
            setComment('')
        }
    },[symptoms]);

    return(
        <div className="profile">
            <div className="profile__full">
                <div className="profile__photo">
                    <img src={profilePhoto}/>
                </div>
                <div className="profile__info">
                    <div className="profile__name">Anna Blake</div>
                    <div className="profile__data">DOB: 03/17/1993</div>
                    <div className="profile__number">(212) 555-1212</div>
                    <div className="profile__email">Anna.Blake@Test.Com</div>
                </div>
            </div>
            <div className="profile__checkbox">
                {
                    symptoms.map((item, key) =>(
                        <SyptomsItem item={item} key={key}/>
                    ))
                }
            </div>
            <div className="profile__comment">Comment</div>
            <div className="profile__text">
                { !!symptoms.length && comment}
            </div>
        </div>    
    )
}

export default Profile;