export const SET_USERS_DATA   = 'SET_USERS_DATA';


export const setUsersData = usersData => dispatch =>{
    dispatch({
        type: SET_USERS_DATA,
        payload: usersData,
    })
}











