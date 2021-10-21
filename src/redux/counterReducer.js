import { INCREMENT_COUNT } from "./counterTypes";


const initialState = {
    num: 0
}


const countReducer = (state=initialState,action) => {

    switch(action.type){
        case INCREMENT_COUNT: return {
            ...state,
            num : state.num+1
        }
        default: return state
    }

}

export default countReducer