import React from 'react'
import {useSelector} from 'react-redux';
import { useState ,useRef} from 'react';
import './Search.css';

function Search() {

    //take data from input field
    const [value,setValue] = useState("");

    const [dataList,setDataList] = useState([]);


    


    const store = useSelector((state) => state.searchResult);
    console.log(store)

    const [data,setData] = useState(()=>{
        let searchList = JSON.parse(localStorage.getItem('searchList')) || [];
        console.log(searchList);
        return searchList;
    })


    //filter data accroding to the input value
    const handleFilter = () =>{
        const sortedData = data.filter((list)=>{
            return list.title === value
        })

        setDataList(sortedData);
    }


    //sorting data in acending order
    const handleSortAce = () => {
        dataList.sort((a,b)=>{
            if(a.title < b.title){
                return a.title - b.title;
            }
        })
    }
    
  return (
    <div>
        <div id='navbar'>
           <input type="text" placeholder='search...' value={value} onChange={(event)=>setValue(event.target.value)}/>
            <button className='search' onClick={()=>handleFilter()}>Search</button>
        </div>
       <div className="functionality">
           <button onClick={()=>handleSortAce()}>Sort A-Z</button>
           <button>Sort Z-A</button>
           <button>Sort by Date(Asc)</button>
           <button>Sort by Date(Desc)</button>
           <button>Sort by quality(Asc)</button>
           <button>Sort by quality(Desc)</button>
           <button>Filter Explicit</button>
       </div>
       <div className="search-result ">
       {
           dataList.map((currData)=>{
                return (
                    <>
                      <div className="result">

                          <div className="url">
                              <p>{currData.url}</p>
                          </div>

                          <div className="heading">
                              <h3><span>{currData.title}</span> | <span>{currData.author}</span></h3>
                          </div>

                          <div className="description">
                              <p>{currData.description}</p>
                          </div>

                          <div className="creationDate">
                              <h3>Creation Date : <span>{currData.creation_date}</span></h3>
                          </div>

                          <div className="quality">
                              <h3><span>Explicit:{currData.explicit? "Yes" : "No"}</span>Quality % : {currData.quality}<span></span></h3>
                          </div>
                      </div>
                    </>
                )
           })
       }
       </div>
    </div>
  )
}

export default Search
