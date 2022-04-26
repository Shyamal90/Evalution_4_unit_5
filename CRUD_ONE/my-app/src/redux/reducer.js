import { tooltipClasses } from '@mui/material';
import {ActionTypes} from './actionTypes';

const initialState = {
    todoList : []
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionTypes.ADD_TODO : return {
               ...state,
               todoList : [...action.payload]
        }

        case ActionTypes.DELETE_TODO : 
                const newData = state.todoList.filter((todo)=>{
                    return todo.id !== action.payload
                })

                return {
                    ...state,
                    todoList : [...newData]
                }

        case ActionTypes.EDIT_TODO : 
                console.log(action.payload)
                const newUpdatedData = state.todoList.map((todo) => {
                           if(todo.id === action.payload.id){
                               return {...todo,title : action.payload.title}
                           }

                           return todo;
                })


                return {
                    ...state,
                    todoList : [...newUpdatedData]
                }


        default : return state;
    }
}