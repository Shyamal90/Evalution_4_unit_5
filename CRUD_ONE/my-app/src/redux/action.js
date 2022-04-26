import {ActionTypes} from './actionTypes';

export const addTodo = (todo) => {
    return {
        type : ActionTypes.ADD_TODO,
        payload : todo
    }
}


export const deleteTodo = (id) => {
    return {
        type : ActionTypes.DELETE_TODO,
        payload : id
    }
}


export const editTodo = (newData) => {
    return {
        type : ActionTypes.EDIT_TODO,
        payload : newData
    }
}