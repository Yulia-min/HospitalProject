import React, { useState } from "react";
import "../request/RequestStyle.css";
import NextButton from "../NextButton/NextButton";
import Diagramm from "../diagramm/Diagramm";
import Profile from "../profile/Profile";
import { SymptomsList } from "../../syptomsList/SymptomsList";

function Request(){ 

    const [symptoms, setSymptoms] = useState([]);
    const [comment, setComment] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    return(
        <div>
            <div className="heading">Requesting the doctor</div>
            <Diagramm/>
            <div className="display__info">
                <Profile symptoms={symptoms} comment={comment} setComment={setComment}/>
                <SymptomsList symptoms={symptoms} setSymptoms={setSymptoms} comment={comment} setComment={setComment} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
            </div>
            <NextButton symptoms={symptoms} isDisabled={symptoms.length === 0}/>
        </div>
    )
}

export default Request;