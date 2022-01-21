import React, { useEffect, useState } from "react";
import profilePhoto from "../../image/profile.png";
import ProfileStyle from "../profile/ProfileStyle.css";
import Comment from "../comment/Comment";
import Choice from "../choice/Choice";
import { SYMPTOM_NAME } from "../../constants";

const Profile = () => {

    const [comment, setComment] = useState('')

    const [symptoms, setSymptoms] = useState([]);

    const createProfileCheckbox = () => {
        return symptoms.map((item) =>(
            <div key={item} className="profile__checkbox__item">
                {SYMPTOM_NAME[item]}
            </div>
        ))
    };

    const createProfileComment = () => {
        if(symptoms.length){
            return  <Comment setComment={setComment} comment={comment}/>
        }
    };

    useEffect(() => {
        if(symptoms.length === 0){
            setComment('')
        }
    },[symptoms]);
    
    return(
        <div>
            <div className="display__info">
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
                <Choice setSymptoms={setSymptoms} symptoms={symptoms}/>        
            </div>
            {
                createProfileComment()
            }
        </div>
    )
}

export default Profile;