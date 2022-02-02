import React, { useState } from "react";
import "../request/RequestStyle.css";
import Diagramm from "../diagramm/Diagramm";
import NextButton from "../../Button/Button";
import FullProfile from "../fullProfile/FullProfile";

function Request(){ 

    const [familyList, setFamilyList] = useState([]);
    const [friendsList, setFriendsList] = useState([]);

    const [isDisabled, setIsDisabled] = useState(true); 

    return(
        <div>
            <div className="heading">Requesting the doctor</div>
            <div className="display__info">
                <div className="choice__full">
                    <Diagramm/>
                    <FullProfile  friendsList={friendsList} setFriendsList={setFriendsList} setIsDisabled={setIsDisabled} familyList={familyList} setFamilyList={setFamilyList}/>
                    <NextButton  isDisabled={isDisabled} /> 
                </div>
            </div>
        </div>
    )
}

export default Request;