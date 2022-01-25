import first from "./image/first.png";
import second from "./image/second.png";
import third from "./image/third.png";
import forth from "./image/forth.png";
import fifth from "./image/fifth.png";
import sixth from "./image/sixth.png";
import seventh from "./image/seventh.png";
import eith from "./image/eith.png";
import ninth from "./image/ninth.png";
import tenth from "./image/tenth.png";

export const SYMPTOM_ID = {
    COVID:1,
    FEVER:2,
    COUGH:3,
    SORE:4,
    CONGESTION:5,
    EYE:6,
    EAR:7,
    URINATION:8,
    RASH:9,
    OTHER:10,
};

export const SYMPTOM_NAME = {
    [SYMPTOM_ID.COVID]: 'Covid-19 concerns / symptoms',
    [SYMPTOM_ID.FEVER]:'Fever',
    [SYMPTOM_ID.COUGH]:'Cough',
    [SYMPTOM_ID.SORE]:'Sore throat',
    [SYMPTOM_ID.CONGESTION]:'Sinus congestion',
    [SYMPTOM_ID.EYE]:'Eye redness or discharge',
    [SYMPTOM_ID.EAR]:'Ear pain',
    [SYMPTOM_ID.URINATION]:'Frequent or painful urination',
    [SYMPTOM_ID.RASH]:'Rash',
    [SYMPTOM_ID.OTHER]:'Other (You`ll need to specify)',
};

export const symptomsList = [
    {id:SYMPTOM_ID.COVID ,image:first, value:SYMPTOM_NAME[SYMPTOM_ID.COVID], isChose: false},
    {id:SYMPTOM_ID.FEVER, image:second, value:SYMPTOM_NAME[SYMPTOM_ID.FEVER]},
    {id:SYMPTOM_ID.COUGH, image:third, value:SYMPTOM_NAME[SYMPTOM_ID.COUGH]},
    {id:SYMPTOM_ID.SORE, image:forth, value:SYMPTOM_NAME[SYMPTOM_ID.SORE]},
    {id:SYMPTOM_ID.CONGESTION, image:fifth, value:SYMPTOM_NAME[SYMPTOM_ID.CONGESTION]},
    {id:SYMPTOM_ID.EYE, image:sixth, value:SYMPTOM_NAME[SYMPTOM_ID.EYE]},
    {id:SYMPTOM_ID.EAR, image:seventh, value:SYMPTOM_NAME[SYMPTOM_ID.EAR]},
    {id:SYMPTOM_ID.URINATION, image:eith, value:SYMPTOM_NAME[SYMPTOM_ID.URINATION]},
    {id:SYMPTOM_ID.RASH, image:ninth, value:SYMPTOM_NAME[SYMPTOM_ID.RASH]},
    {id:SYMPTOM_ID.OTHER, image:tenth, value:SYMPTOM_NAME[SYMPTOM_ID.OTHER]},
];