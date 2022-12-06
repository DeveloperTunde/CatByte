import { SET_USERS_DATA} from "./actions";

const initialState={
    usersData: null,
}

function userReducer (state= initialState, action){
    switch(action.type){
        case SET_USERS_DATA:
            return {...state, usersData: action.payload}
        default:
            return state;
    }
}

export default userReducer;