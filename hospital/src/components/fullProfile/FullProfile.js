import React, { useEffect } from "react";
import NullProfile from "./nullprofile/NullProfile";
import FriendsProfile from "./friendsProfile/FriendsProfyle";
import FamilyProfile from "./familyProfile/FamilyProfile";
import  "./FullProfyleStyle.css";
import {data} from '../data';

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
            <NullProfile handleChange={handleChange}/>
            <FamilyProfile  familyList={familyList} setFamilyList={setFamilyList} setIsDisabled={setIsDisabled} handleChange={handleChange}/>
            <FriendsProfile friendsList={friendsList} setFriendsList={setFriendsList} setIsDisabled={setIsDisabled} handleChange={handleChange}/>
        </>
    )
}

export default FullProfile