
import * as types from './actionTypes';

export const ageUpAsnc = (val) =>
{ return { type: types.AGE_UP, value: val }
};

export const ageUp = val =>{
    return dispatch =>{
        setTimeout(() => {
           dispatch( ageUpAsnc(val));
        }, 5000);
    }
}



export const ageDown = (val) =>
{ return { type: types.AGE_DOWN, value: val }
};

export const delHIstory = (val) =>
{ 
    return { type: types.DEL_HISTORY, key: val }
};

 