import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import returnsMock from '../../assets/mock/returns.json';

const initialState = returnsMock;

const setReturns = ( state, action ) => {
    return state;
}

const reducer = (state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.SET_RETURNS: return setReturns( state, action );
    }
}

export default reducer;