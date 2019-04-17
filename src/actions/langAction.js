import * as types from './actionTypes';

export const changLanguage =(val) =>{
    return { type: types.CHANGE_LANG, lang: val }
}