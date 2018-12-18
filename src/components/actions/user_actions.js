export function loginUser(userInfo){
    return (dispatch)=>{
        dispatch({type: "LOGIN", payload: userInfo})
    }
}