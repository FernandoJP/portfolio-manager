import * as actionTypes from './actionTypes';

export const setReturnsData = (returnsData) => {
    console.log({returnsData});
    return {
        type: actionTypes.SET_RETURNS,
        returnsData: returnsData
    }
}