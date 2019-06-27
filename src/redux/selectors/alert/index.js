export const getAlertMessage = (state) => {
    if(state.alert.message){
        return state.alert.message
    }
    return false
}