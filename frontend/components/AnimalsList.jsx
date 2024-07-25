import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function AnimalsList() {


  const bannerdata = [
    {
      type: "mammal",
      source: '/mammal.jpg',
      heading : 'Mammals'
    }
    ,
    {
      type : 'fish',
      source: '/fishbanner.jpg',
      heading: 'Fishes',
    },
    {
      type: 'bird',
      source: '/sky.jpg',
      heading: 'Birds'
    },
    {
      type: 'insect',
      source: '/insectbanner.jpg',
      heading: 'Insects'
    },
    {
      type: 'reptile',
      source: '/reptilebanner.jpg',
      heading: 'Reptiles'
    },
    {
      type : 'arachnid',
      source: '/arachnid.jpg',
      heading: 'Arachnids',
    },
    {
      type : 'amphibian',
      source: '/amphi.jpg',
      heading: 'Amphibians',
    },
    {
      type : 'crustacean',
      source: '/crab.jpg',
      heading: 'Crustaceans',
    },
    {
      type : 'mollusc',
      source: '/octopus.jpg',
      heading: 'Molluscs',
    },
    {
      type : 'other',
      source: '/worm.jpg',
      heading: 'Others',
    },
    {
      type : 'herbivore',
      source: '/banners/rhino.jpg',
      heading: 'Herbivores',
    },
    {
      type : 'carnivore',
      source: '/carnivore.jpg',
      heading: 'Carnivores',
    },
    {
      type : 'omnivore',
      source: '/banners/lizard.jpg',
      heading: 'Omnivores',
    },
    {
      type : 'southasia',
      source: '/banners/india.jpg',
      heading: 'South Asia',
    },
    {
      type : 'northasia',
      source: '/banners/northasia.webp',
      heading: 'South Asia',
    },
    {
      type : 'austrailia',
      source: '/banners/aust.jpg',
      heading: 'Australia',
    },
    {
      type : 'africa',
      source: '/banners/africa.jpg',
      heading: 'Africa',
    },
    {
      type : 'europe',
      source: '/banners/europe.jpg',
      heading: 'Europe',
    },
    {
      type : 'southamerica',
      source: '/banners/amazon.jpg',
      heading: 'South America',
    },
    {
      type : 'america',
      source: '/banners/america.jpg',
      heading: 'North America',
    },
    {
      type : 'ocean',
      source: '/banners/ocean.jpg',
      heading: 'Oceans',
    },
  ]

  const [info, setInfo] = useState({})

  
  
  
  const type = useParams().type; //get the type

  console.log(type);

  const [subtext, setSubtext] = useState('. . .')
  const [animals, setAnimals] = useState([]);
  const [searchQuery, setSearchQuery] = useState(" ");

  useEffect(()=>{
    async function getBannerinfoFromAI(){
      const query = "Tell me a one line interesting fact about " + type +"s for a website. Context: (wildlife). Make it short and concise "

      var d = {
        prompt : query
      }

      fetch('/api/aisearch', {
        method:'post',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(d)
      }).then((res)=>{
        return res.json();
      }).then((data)=>{
        console.log(data);
        setSubtext(data.text)
      })

   }
   getBannerinfoFromAI()
  },[])

  useEffect(()=>{
    bannerdata.forEach((box)=>{
      if (box.type === type) {
        setInfo(box)
        console.log(box);
        // console.log(info);
      }
    })
  },[animals]
  )

  useEffect(() => {
    async function configureByType() {
      const resp = await fetch("/api/getByType/" + type);
      const data = await resp.json();
      console.log(data);
      setAnimals(data);
    }

    configureByType();
  }, []);

  useEffect(() => {
    console.log(searchQuery);
    getSearchData(searchQuery);
  }, [searchQuery]);

  async function getSearchData(query) {
    var qdata = {
      query: query,
    };

    fetch("/api/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(qdata),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnimals((d) => data);
        // console.log(searchResults);
      });
  }

  return (
    <>

    <div className="bannerDiv">
    <img src={info.source} className="typeBanner" />

    <div className="bannerTextbg">
      <h1 className="bannerText">{info.heading}</h1>
    </div>
    <p className="subtext">
      {subtext}
    </p>
    </div>

    <div className="animalList">
      <div className="searchBox">
        <input
          placeholder="Type to search"
          type="text"
          onChange={(e) => {
            setSearchQuery((s) => e.target.value);
          }}
        />
      </div>



      <div className="cardRow">
        {animals.map((animal) => {
          return <Card key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  </>
  );
}

export default AnimalsList;
