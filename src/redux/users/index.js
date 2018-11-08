import initState from './state'
import * as types from '../types';

export function counter(state = initState, action) {
    switch (action.type) {
    case types.LOGIN:
        return {...state , userData: action.paload};
    case types.LOGINSTATUS:
        return {...state , loginData: action.paload};
    default:
        return state;
    }
}