import { createStore, combineReducers } from 'redux';

const AUTHENTICATION = false;


//Es recomendable retornar por default el state

const loggin = (state = '', action) => {
    
    switch (action.type.userRol) {
        case 'estudiante':
            const userStudent = {
                data: action.type.response,
                type: false
            }
            return userStudent;
        case 'docente':
            const userTeach = {
                data: action.type.response,
                type: true
            }
            return userTeach;
        default:
            return ''
    }
}

// const initialSetting = (state = false, action) => {
//     switch(action.type){
//         case true:
//             return true
//         default:
//             return false
//     }
// }

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
    // initialSetting
}))

export default store