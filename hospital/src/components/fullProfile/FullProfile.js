import React, { useEffect } from "react";
import NullProfile from "./nullprofile/NullProfile";
import FriendsProfile from "./friendsProfile/FriendsProfyle";
import FamilyProfile from "./familyProfile/FamilyProfile";
import profilePhoto from '../../image/profile.png';
import vector from "../../image/Vector.png";
import  "./FullProfyleStyle.css";
import {data} from '../data';
import FullItem from "./FullItem";

const FullProfile = ({setIsDisabled, familyList, setFamilyList, friendsList, setFriendsList}) =>{ 

    useEffect(() => {
        setFamilyList(data);
        setFriendsList(data);
    }, []);


    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "friendsSelect") {
            let temp = friendsList.map((person) => {
                return { ...person, isChecked: checked };
            });
            setFriendsList(temp);
        }else if (name === "familySelect") {
            let tempFamily = familyList.map((person) => {
              return { ...person, isChecked: checked };
            });
            setFamilyList(tempFamily);
        }else {
          let tempFamily = familyList.map((person) =>
          person.name === name ? { ...person, isChecked: checked } : person
          );
          setFamilyList(tempFamily);
          let tempFriends = friendsList.map((person) =>
          person.name === name ? { ...person, isChecked: checked } : person
          );
          setFriendsList(tempFriends);
        }
        if(checked){
            console.log("lala")
            setIsDisabled(false)
        }
      };
    
    return(
        <>
            <div className="profile__text__1">You</div>
            {
                data.filter(item => item.relation === null)
                .map(item => 
                    <FullItem item={item}/>
                )
            }
            <div className="full__checkbox__text">Family</div>
            {
                data.filter(item => item.relation === 'family')
                .map(item => 
                    <FullItem item={item}/>
                )                          
            }
            <div className="full__checkbox__text">Friends</div>
            {
                data.filter(item => item.relation === 'friends')
                .map(item => 
                    <FullItem item={item}/>
                )                          
            }
            {/* <NullProfile handleChange={handleChange}/>
            <FamilyProfile  familyList={familyList} setFamilyList={setFamilyList} setIsDisabled={setIsDisabled} handleChange={handleChange}/>
            <FriendsProfile friendsList={friendsList} setFriendsList={setFriendsList} setIsDisabled={setIsDisabled} handleChange={handleChange}/> */}
        </>
    )
}

export default FullProfile