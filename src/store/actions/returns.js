import * as actionTypes from './actionTypes';

export const setReturnsData = (returnsData) => {
    return {
        type: actionTypes.SET_RETURNS,
        returnsData
    }
}

export const initReturnsData = (returnsData) => {
    debugger;
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
    console.log({ updatedReturnsData });
    return setReturnsData(updatedReturnsData);
}

// chartData.push({
    //     label: i,
    //     value,
    //     tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
    //   });