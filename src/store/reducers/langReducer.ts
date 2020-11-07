import { SET_LANGUAGE, LangAction, LangState } from '../types';

const localSorageLang = localStorage.getItem('language');

const initialState: LangState = {
  language: localSorageLang ? localSorageLang : 'EN'
}

const langReducer = (state = initialState, action: LangAction) => {
  switch(action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}

export default langReducer;