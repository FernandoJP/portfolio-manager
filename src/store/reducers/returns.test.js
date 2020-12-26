import reducer from './returns';
import * as actionTypes from '../actions/actionTypes';

const returnsMock = {
    data: {
        "1": [
            { day: "1", value: "0.1" },
            { day: "2", value: "0.2" },
            { day: "3", value: "0.3" },
        ]
    }
};

const updatedMock = {
    "returnsData": [
        {label: 1, value: "0.10", tooltipContent: "<b>x: </b>1<br><b>y: </b>0.1"},
        {label: 2, value: "0.30", tooltipContent: "<b>x: </b>2<br><b>y: </b>0.2"},
        {label: 3, value: "0.60", tooltipContent: "<b>x: </b>3<br><b>y: </b>0.3"}
    ]
};

describe('returns reducer', () => {
    fit('should return the returns data', () => {
        expect(reducer(undefined, {
            type: actionTypes.SET_RETURNS,
            returnsData: returnsMock.data[1]
        })).toEqual(updatedMock);
    });
});