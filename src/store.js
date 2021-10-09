import { createStore, combineReducers } from 'redux';

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
            return state
    }
}

const initialSetting = (state = '', action) => {
    // console.log(action.type)
    switch(action.type){
        case 'CONFIRM':
            return true
        default:
            return state
    }
}


const store = createStore(combineReducers({
    loggin,
    initialSetting
}))


export default store;
