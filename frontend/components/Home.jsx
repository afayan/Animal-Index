import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Carousel from "./Carousel";
import Topbar from "./Topbar";

function Home() {
  return (
    <div>
      <Carousel />

      <h2 className="label" id="typeBanner">Type</h2>
      <div className="cardContainer">
        <Link to={"/animals/bird"} className="link">
          <CategoryCard name={"Birds"} image={"/bird.webp"} />
        </Link>

        <Link to={"/animals/mammal"} className="link">
          <CategoryCard name={"Mammals"} image={"/mamaml.jpg"} />
        </Link>

        <Link to={"/animals/fish"} className="link">
          <CategoryCard name={"Fishes"} image={"/fish.jpg"} />
        </Link>

        <Link to={"/animals/reptile"} className="link">
          <CategoryCard name={"Reptiles"} image={"/reptile.jpg"} />
        </Link>

        <Link to={"/animals/insect"} className="link">
          <CategoryCard name={"Insects"} image={"/insect.jpg"} />
        </Link>

        <Link to={"/animals/amphibian"} className="link">
          <CategoryCard name={"Amphibians"} image={"/amphi.jpg"} />
        </Link>

        <Link to={"/animals/arachnid"} className="link">
          <CategoryCard name={"Arachnids"} image={"/arachnid.jpg"} />
        </Link>

        <Link to={"/animals/crustacean"} className="link">
          <CategoryCard name={"Crustaceans"} image={"/crab.jpg"} />
        </Link>

        <Link to={"/animals/mollusc"} className="link">
          <CategoryCard name={"Molluscs"} image={"/snail.jpg"} />
        </Link>

        <Link to={"/animals/other"} className="link">
          <CategoryCard name={"Others"} image={"/worm.jpg"} />
        </Link>
      </div>

      <h2 className="label" id="diet">Diet</h2>

      <div className="cardContainer">
        <Link to={"/animals/herbivore"} className="link">
          <CategoryCard
            name={"Herbivores"}
            image={"/pexels-davidohboy-8100784.jpg"}
          />
        </Link>

        <Link to={"/animals/carnivore"} className="link">
          <CategoryCard name={"Carnivores"} image={"/carnivore.jpg"} />
        </Link>

        <Link to={"/animals/omnivore"} className="link">
          <CategoryCard name={"Omnivores"} image={"/omni.jpg"} />
        </Link>
      </div>

      <h2 className="label" id="habitat">Habitat</h2>
      <div className="cardContainer">
        <Link to={"/animals/terrestrial"} className="link">
          <CategoryCard name={"Terrestrial"} image={"/terr.jpg"} />
        </Link>

        <Link to={"/animals/aquatic"} className="link">
          <CategoryCard name={"Aquatic"} image={"/ocean.jpg"} />
        </Link>

        <Link to={"/animals/arboreal"} className="link">
          <CategoryCard name={"Arboreal"} image={"/arboreal.jpg"} />
        </Link>

        <Link to={"/animals/aerial"} className="link">
          <CategoryCard name={"Aerial"} image={"/sky.jpg"} />
        </Link>

        <Link to={"/animals/amphibian"} className="link">
          <CategoryCard name={"Amphibian"} image={"/amphi.jpg"} />
        </Link>
      </div>

      <h2 className="label" id="location">Location</h2>

      <div
        className="map"
        style={{
          backgroundImage: " url('/map.jpg')",
        }}
      >
        <img src="/map.jpg" id="map" alt="" />

        <Link to= {'/animals/america'} className="mapmarkers" id="america">
          <label className="maplabel">America</label>
        </Link>

        <Link  to= {'/animals/northasia'} className="mapmarkers" id="asia">
          <label className="maplabel">Asia (North)</label>
        </Link>

        <Link  to= {'/animals/europe'} className="mapmarkers" id="europe">
          <label className="maplabel">Europe</label>
        </Link>

        <Link  to= {'/animals/africa'} className="mapmarkers" id="africa">
          <label className="maplabel">Africa</label>
        </Link>

        <Link  to= {'/animals/austrailia'} className="mapmarkers" id="austrailia">
          <label className="maplabel">Austrailia</label>
        </Link>

        <Link  to= {'/animals/southamerica'} className="mapmarkers" id="southAmerica">
          <label className="maplabel">South America</label>
        </Link>

        <Link  to= {'/animals/southasia'} className="mapmarkers" id="southAsia">
          <label className="maplabel">Asia (South)</label>
        </Link>

        <Link  to= {'/animals/ocean'} className="mapmarkers" id="ocean">
          <label className="maplabel">Ocean</label>
        </Link>
      </div>

      <h2 className="label" id="bloodtemp">Body temperature</h2>
      <div className="cardContainer">

        <Link to={"/animals/warm"} className="link">
        <CategoryCard name={"Warm Blooded"} image={"/amphi.jpg"} />
        </Link>

        <Link to={"/animals/cold"} className="link">
        <CategoryCard name={"Cold Blooded"} image={"/amphi.jpg"} />
        </Link>
      </div>
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
