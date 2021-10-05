import { createStore, combineReducers } from 'redux';

const AUTHENTICATION = false;


//Es recomendable retornar por default el state

const loggin = (state = AUTHENTICATION, action) => {
    // console.log(action)
    switch (action.type.student || action.type.teach) {
        case true:
            return action.type
        default:
            return false
    }
}

const initialSetting = (state = false, action) => {
    switch(action.type){
        case true:
            return true
        default:
            return false
    }
}

// const initialSetting = (state = {}, action) => {
//     switch(action.type){
//         case true:
//             return true
//         default:
//             return false
//     }
// }


const store = createStore(combineReducers({
    loggin,
    initialSetting
}))

export default store