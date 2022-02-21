import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {GET_DATA} from '../../Redux/action'
import { useState } from 'react';

function Home() {

    //set data in local storage
    const [searchList , setSearchList] = useState(()=>{
        const data = JSON.parse(localStorage.getItem("searchList")) || [];

        return data;
    })

    //getData from api and store it in redux store
    useEffect(()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data`).then((data)=>{
            console.log(data.data);
            const result = data.data;
            dispatch(GET_DATA(result));
            localStorage.setItem("searchList",JSON.stringify(result));
        },[])
    })

    const data = useSelector((state)=> state.searchResult);
    console.log("data",data);
    
    //for handle data to local storage
    const dispatch = useDispatch();

    
  return (
    <div>
      <div className="logoContainer">
          <h1>Masai Search Engine</h1>
      </div>

      <div className="searchContainer">
          <input type="text" className='search-box'/>
          <button className='search'>Search</button>
      </div>
      <div className="showData">
       {
           searchList.map((result)=>{
               return (
                //    <p>{result.title}</p>
                <>
                </>
               )
           })
       }
      </div>
    </div>
  )
}

export default Home
