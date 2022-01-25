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