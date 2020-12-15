import * as actionTypes from './actionTypes';

export const setReturnsData = (returnsData) => {
    return {
        type: actionTypes.SET_RETURNS,
        returnsData: returnsData
    }
}

export const setInvestmentData = (investmentData) => {
    return {
        type: actionTypes.SET_INVESTMENT,
        investmentData: investmentData
    }
}