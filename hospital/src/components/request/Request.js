import React, { useState } from "react";
import "../request/RequestStyle.css";
import Diagramm from "../diagramm/Diagramm";
import Profile from "../profile/Profile";
import { SymptomsList } from "../../syptomsList/SymptomsList";
import NextButton from "../../Button/Button";

function Request(){ 

    const [symptoms, setSymptoms] = useState([]);
    const [comment, setComment] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    return(
        <div>
            <div className="heading">Requesting the doctor</div>
            <div className="display__info">
                <Profile symptoms={symptoms} comment={comment} setComment={setComment}/>
                <div className="choice__full">
                    <Diagramm/>
                    <SymptomsList symptoms={symptoms} setSymptoms={setSymptoms} comment={comment} setComment={setComment} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
                    <NextButton symptoms={symptoms} isDisabled={symptoms.length === 0}/>
                </div>
            </div>
        </div>
    )
}

export default Request;