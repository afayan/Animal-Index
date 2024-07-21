import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Animal() {

  const [info, setInfo] = useState([])
  const id = useParams().id


  useEffect(()=>{
    async function getInfo() {
      
      const response = await fetch('/api/getAnimalProfile/'+id)
      const data = await response.json()
      console.log(data);
      setInfo(a=>data) 
     
    }

    getInfo()
  }, [])

  console.log(id);

  if (info[0]) {
    
    
    return (
      
      <div className='animalProfile'>
      <h1 className='profiletitle'>
        {info[0] ? info[0].common_name : "null"}

        <span className='sciName'> 
          {info[0].sci_name}
        </span>
      </h1>

      <img src={info[0].imageURL} className='profileImage'/>

   

      <img src={info[0].imageURL} alt="" className='profileImageSmall'/>
   

      <pre className='profileDesc'>

        
        <h4>{info[0].blood} Blooded {info[0].diet} {info[0].type}, found in {info[0].habitat }</h4>

        {info[0].description}
      </pre>

    
    </div>
  )
}
}

export default Animal
