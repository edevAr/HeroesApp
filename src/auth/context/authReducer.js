import { typess } from "../types/types";


export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case typess.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case typess.logout:
            return {
                logged: false,
            }
        default:
            return state;
    }

}