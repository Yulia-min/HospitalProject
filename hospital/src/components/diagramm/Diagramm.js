import React from "react";
import "../diagramm/DiagrammStyle.css";

function Diagramm(){
    return(
        <div className="display__article">
            <div className="circle">
                <svg  viewBox="0 0 40 40" className="donut">
                    <circle cx="13" cy="11" r="15.91549430918954" fill="#fff"></circle>
                    <circle cx="17" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="2"></circle>
                    <circle cx="17" cy="21" r="15.91549430918954" fill="transparent" stroke="darkblue" strokeWidth="2" strokeDasharray="40 60" strokeDashoffset="25"></circle>
                    <g>
                        <text x="17%" y="60%" fill="darkblue">
                            2 of
                        </text>
                        <text x="58%" y="60%" fill="gray">
                            5
                        </text>
                    </g>
                </svg>
            </div>
            <div className="display__text">
                <div className="title">What are the symptoms?</div>
                <div className="text">Select people for whom you are requesting the visit</div>
            </div>
        </div>
    )
}

export default Diagramm;