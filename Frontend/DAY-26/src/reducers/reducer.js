const initialState={username:'',email:''}

const cReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'cName':
            return {
                ...state, 
                username: action.username}
        
        case 'cEmail':
            return{
                ...state, 
                email: action.email}

        default :
        return state
    }
}

export default cReducer