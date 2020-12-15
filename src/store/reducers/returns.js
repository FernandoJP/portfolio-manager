import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import returnsMock from '../../assets/mock/returns.json';

const setReturns = (state, returnsData) => {
    const updatedReturnsData = returnsData.map((currentReturn, i, returnsData) => {
        const day = currentReturn.day || currentReturn.label;
        return {
            label: parseInt(day),
            value: parseFloat(returnsData.slice(0, i + 1)
                .reduce((total, current) => {
                    return {
                        value: parseFloat(total.value) + (parseFloat(current.value))
                    }
                }).value).toFixed(2),
            tooltipContent: `<b>x: </b>${day}<br><b>y: </b>${currentReturn.value}`
        }
    });
    const updatedState = {
        returnsData: updatedReturnsData
    }
    return updateObject(state, updatedState);
}

const setInvesment = (state, returnsData) => {
    const updatedInvesmentData = returnsData.map((currentReturn,  i, returnsData) => {
        const day = currentReturn.day || currentReturn.label;
        return {
            id: parseInt(day),
            variation: parseFloat(currentReturn.value),
            accumulatedReturn: parseFloat(returnsData.slice(0, i + 1)
                .reduce((total, current) => {
                    return {
                        value: parseFloat(total.value) + (parseFloat(current.value))
                    }
                }).value).toFixed(2)
        }
    });

    const updatedState = {
        investmentData: updatedInvesmentData
    }
    return updateObject(state, updatedState);
}

const initialState = {
    returnsData: setReturns(null, Object.values(returnsMock.data)[0] ).returnsData
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RETURNS: return setReturns(state, action.returnsData);
        case actionTypes.SET_INVESTMENT: return setInvesment(state, action.investmentData);
        default: return state;
    }
}

export default reducer;