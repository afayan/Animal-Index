import React from 'react'
import { useParams } from 'react-router-dom'

function AnimalsList() {

const type = useParams().type 

  return (
    <div>
      Animals List
      {type}
    </div>
  )
}

export default AnimalsList
