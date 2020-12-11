import * as actionTypes from './actionTypes';

export const setReturnsData = (returnsData) => {
    return {
        type: actionTypes.SET_RETURNS,
        returnsData
    }
}

export const initReturnsData = (returnsData) => {
    const updatedReturnsData = returnsData.map((currentReturn, i, returnsData) => {
        return {
            label: parseInt(currentReturn.day),
            value: returnsData.slice(0, i+1)
                .reduce((total, current) => {
                    return {
                        value: parseFloat(total.value) + (parseFloat(current.value))
                    }
                }).value,
            tooltipContent: `<b>x: </b>${currentReturn.day}<br><b>y: </b>${currentReturn.value}`
        }
    });

    return setReturnsData(updatedReturnsData);
}