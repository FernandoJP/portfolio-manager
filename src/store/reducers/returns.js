import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import returnsMock from '../../assets/mock/returns.json';

const initialState = {
    returnsData: Object.values(returnsMock.data)[0]
}

const setReturns = ( state, action ) => {
    const updatedState = {
        returnsData: action.returnsData
    }
    return updateObject( state, updatedState );
}

const reducer = (state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.SET_RETURNS: return setReturns( state, action );
        default: return state;
    }
}

export default reducer;