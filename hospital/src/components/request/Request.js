import React, { useState } from "react";
import RequestStyle from "../request/RequestStyle.css";
import map from 'lodash/map';
import profilePhoto from "../../image/profile.png";
import first from "../../image/first.png";
import second from "../../image/second.png";
import third from "../../image/third.png";
import forth from "../../image/forth.png";
import fifth from "../../image/fifth.png";
import sixth from "../../image/sixth.png";
import seventh from "../../image/seventh.png";
import eith from "../../image/eith.png";
import ninth from "../../image/ninth.png";
import tenth from "../../image/tenth.png";

const Checkbox = ({id, handleChange, symptoms}) => (
    <div>
      <input
        type="checkbox"
        id={id}
        name={id}
        value={id}
        onChange={handleChange}
        checked={symptoms[id]}
      />
    </div>
  );
  

function Request(){

    const [comment, setComment] = useState('')

    const handleInput = event => {
        setComment(event.target.value);
    };

    const [symptoms, setSymptoms] = useState({});

    const handleChange = (e) => {
        const {name, value, checked} = e.target;
        setSymptoms((prev) => ({
          ...prev,
          [name]:checked ? value : ""
        }));
      };
      
    return(
        <div>
            <div className="heading">Requesting the doctor</div>
            <div className="display__article">
                <div className="circle">
                    <svg  viewBox="0 0 40 40" className="donut">
                        <circle cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="2"></circle>
                        <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="darkblue" strokeWidth="2" strokeDasharray="40 60" strokeDashoffset="25"></circle>
                        <g>
                            <text x="27%" y="60%" fill="darkblue">
                                2 of
                            </text>
                            <text x="68%" y="60%" fill="gray">
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
                        {map(symptoms, (val, key) => (
                            <div key={key} className="profile__checkbox__item">           
                                {`${val}`}                               
                            </div>
                        ))}
                    </div>
                    <div className="profile__comment">Comment</div>
                    <div className="profile__text">
                        {comment}
                    </div>
                </div>
                <div className="checkbox">
                    <div className="checkbox__full">
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={first}/>
                            </div>
                            <div className="checkbox__text">Covid-19 concerns / symptoms</div>
                            <Checkbox symptoms={symptoms} id="Covid-19 concerns / symptoms" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={second}/>
                            </div>
                            <div className="checkbox__text">Fever</div>
                            <Checkbox symptoms={symptoms} id="Fever" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={third}/>
                            </div>
                            <div className="checkbox__text">Cough</div>
                            <Checkbox symptoms={symptoms} id="Cough" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">    
                            <div className="checkbox__photo">
                                <img src={forth}/>
                            </div> 
                            <div className="checkbox__text">Sore throat</div>
                            <Checkbox symptoms={symptoms} id="Sore throat" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={fifth}/>
                            </div>                          
                            <div className="checkbox__text">Sinus congestion</div>
                            <Checkbox symptoms={symptoms}  id="Sinus congestion" handleChange={handleChange}/> 
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={sixth}/>
                            </div>                           
                            <div className="checkbox__text">Eye redness or discharge</div>
                            <Checkbox symptoms={symptoms} id="Eye redness or discharge" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={seventh}/>
                            </div>
                            <div className="checkbox__text">Ear pain</div>
                            <Checkbox symptoms={symptoms} id="Ear pain" handleChange={handleChange} />
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={eith}/>
                            </div>
                            <div className="checkbox__text">Frequent or painful urination</div>                         
                            <Checkbox symptoms={symptoms}  id="Frequent or painful urination" handleChange={handleChange} />
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={ninth}/>
                            </div>
                            <div className="checkbox__text">Rash</div>                           
                            <Checkbox symptoms={symptoms} id="Rash" handleChange={handleChange}/>
                        </div>
                        <div className="checkbox__item">
                            <div className="checkbox__photo">
                                <img src={tenth}/>
                            </div>
                            <div className="checkbox__text">Other (You'll need to specify)</div>
                            <Checkbox symptoms={symptoms} id="Other (You'll need to specify)" handleChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment">
                <textarea placeholder=" " onChange={handleInput} ></textarea>
                <label>Please describe how you're feeling</label>
            </div>
            <div className="button">
                <div className="button__cancel">
                    <button>Cancel</button>
                </div>
                <div className="button__next">
                    <button type="button">Next</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Request;