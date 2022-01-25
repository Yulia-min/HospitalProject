import React, { useEffect } from "react";
import profilePhoto from "../../image/profile.png";
import "../profile/ProfileStyle.css";
import { SYMPTOM_NAME } from "../../constants";

const Profile = ({symptoms, comment, setComment}) => {

    const createProfileCheckbox = () => {
        return symptoms.map((item) =>(
            <div key={item} className="profile__checkbox__item">
                {SYMPTOM_NAME[item]}
            </div>
        ))
    };

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
                    createProfileCheckbox()
                }
            </div>
            <div className="profile__comment">Comment</div>
            <div className="profile__text">
                { Boolean(symptoms.length) && comment}
            </div>
        </div>    
    )
}

export default Profile;