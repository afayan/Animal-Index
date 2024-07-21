import React, { useEffect, useState } from 'react'
import Card from './Card'
import Topbar from './Topbar'

function Searchpage(props) {

    const [searchQuery, setSearchQuery] = useState(" ")
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        console.log(searchQuery);
        getSearchData(searchQuery)
    }, [searchQuery])


    async function getSearchData(query) {

        var qdata = {
            query: query
        }

        fetch('/api/search', {
            method:'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(qdata)
        }).then((response)=>{
            return response.json()
        }).then((data)=>{
            setSearchResults(d=>data)
            // console.log(searchResults);
        })
    }

  return (
    <>
    <div className='searchBox'>
      <input placeholder='Type to search' type="text" onChange={(e)=>{setSearchQuery(s=>e.target.value)}}/>
    </div>

    <div className="cardRow">
        {searchResults.map((animal)=>{
            return < Card key = {animal.id} animal = {animal}/>
        })}
    </div>

    </>
  )
}

export default Searchpage
