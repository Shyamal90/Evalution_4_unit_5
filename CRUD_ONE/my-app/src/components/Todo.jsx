import React, { useEffect, useState,  } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {addTodo} from '../redux/action'
import CustomizedTables from './CustomizedTables';

function Todo() {
    const store = useSelector((state)=> state.todoList);
    const dispatch = useDispatch();

    // const [todoList,setTodoList] = useState([]);
    
    useEffect(()=>{
        getTodoList()
    },[])


    const getTodoList = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/todos`).then((resp) => {
            console.log("Response : ", resp.data);
            
            // setTodoList([...resp.data])
            let data = resp.data;
            dispatch(addTodo(data))
        }).catch((error) => {
            console.log("Error : ",error)
        })
    }


    console.log("Store Data : ",store)

  return (
    <div>
       <h1>Todo Application</h1>
       <CustomizedTables/>
    </div>
  )
}

export default Todo
