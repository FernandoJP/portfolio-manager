import * as actionTypes from './actionTypes';

export const setProfileData = (profileData) => {
    return {
        type: actionTypes.SET_PROFILE,
        profileData: profileData
    }
}