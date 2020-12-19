import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import profileMock from '../../assets/mock/profile.json';

const setProfile = (state, returnsData) => {
    return updateObject(state, returnsData);
}

const initialState = {
    profileData: profileMock.data
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PROFILE: return setProfile(state, action.profileData);
        default: return state;
    }
}

export default reducer;