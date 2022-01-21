import React, { useState } from "react";
import RequestStyle from "../request/RequestStyle.css";
import NextButton from "../NextButton/NextButton";
import Diagramm from "../diagramm/Diagramm";
import Profile from "../profile/Profile";

function Request(){     
    return(
        <div>
            <div className="heading">Requesting the doctor</div>
            <Diagramm/>
            <Profile/>
            <NextButton/>
        </div>
    )
}

export default Request;