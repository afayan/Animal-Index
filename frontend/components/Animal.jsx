import React from 'react'
import { useParams } from 'react-router-dom'

function Animal() {

    const type = useParams()

  return (
    <div>
        Animal {type}
    </div>
  )
}

export default Animal
