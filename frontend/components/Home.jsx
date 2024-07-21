import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Carousel from "./Carousel";
import Topbar from "./Topbar";

function Home() {
  return (
    <div>
        <Carousel/>

      <h2 className="label">Type</h2>

      <div className="cardContainer">
        <Link to={"/animals/:birds"} className= "link">
          <CategoryCard name={"Birds"} image={"/bird.webp"} />
        </Link>

        <Link to={"/animals/:mammals"} className= "link">
          <CategoryCard name={"Mammals"} image={"/mamaml.jpg"} />
        </Link>

        <Link to={"/animals/:fish"} className= "link">
          <CategoryCard name={"Fishes"} image={"/fish.jpg"} />
        </Link>

        <Link to={"/animals/:reptiles"} className= "link">
        <CategoryCard name={"Reptiles"} image={"/reptile.jpg"} />
        </Link>

        <Link to={"/animals/:insect"} className= "link">
          <CategoryCard name={"Insects"} image={"/insect.jpg"} />
        </Link>

      </div>

      <h2 className="label">Diet</h2>

      <div className="cardContainer">

      <Link to={"/animals/:herbivore"} className= "link">

      <CategoryCard name={"Herbivores"} image={"/pexels-davidohboy-8100784.jpg"} />
      </Link>

      <Link to={"/animals/:carnivore"} className= "link">
      <CategoryCard name={"Carnivores"} image={"/carnivore.jpg"} />

      </Link>

      <Link to={"/animals/:omnivores"} className= "link">
      <CategoryCard name={"Omnivores"} image={"/omni.jpg"} />
      </Link>
      </div>

      <h2 className="label">Habitat</h2>
      <div className="cardContainer">

      <Link to={"/animals/:terrestrial"} className= "link">
      <CategoryCard name={"Terrestrial"} image={"/terr.jpg"} />
      </Link>

      <Link to={"/animals/:aquatic"} className= "link">
      <CategoryCard name={"Aquatic"} image={"/ocean.jpg"} />
      </Link>

      <Link to={"/animals/:arial"} className= "link" >
      <CategoryCard name={"Arial"} image={"/sky.jpg"} style={{color:"black"}}/>
      </Link>
      </div>

      <h2 className="label">Location</h2>

    <div className="map" style={{
      backgroundImage:" url('/map.jpg')",
    }}>

      <img src="/map.jpg" id="map" alt="" />

      <div className="mapmarkers" id="america"></div>
      <div className="mapmarkers" id="asia"></div>
      <div className="mapmarkers" id="europe"></div>
      <div className="mapmarkers" id="africa"></div>
      <div className="mapmarkers" id="austrailia"></div>
      <div className="mapmarkers" id="southAmerica"></div>
      <div className="mapmarkers" id="southAsia"></div>
      <div className="mapmarkers" id="ocean"></div>
    </div>

      

      <h2 className="label">Body temperature</h2>
      <Link to={"/animals/:warm"} className= "link">
        <div className="selectTypeButton">Warm blooded</div>
      </Link>

      <Link to={"/animals/:cold"} className= "link">
        <div className="selectTypeButton">Cold blooded</div>
      </Link>
    </div>
  );
}

export default Home;

function CategoryCard(props) {
  return (
    <>
      <div
        className="categoryCard"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <h3>{props.name}</h3>
      </div>
    </>
  );
}
