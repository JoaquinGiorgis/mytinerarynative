// import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {
    loggedUser: null
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOG_USER': // new_user action
            
            // AsyncStorage.setItem('username', action.payload.username)
            // AsyncStorage.setItem('token', action.payload.token)
            
            return {
                ...state,
                loggedUser: action.payload.response
            }

        case 'DISCONNECT_USER':
            
            // AsyncStorage.clear();
        
            return {
                ...state,
                loggedUser: null
            }
           
        
        default:
            return state
    }

}

module.exports = authReducer