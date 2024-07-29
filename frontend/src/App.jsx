import { useState } from "react";
import Topbar from "../components/Topbar.jsx";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Upload from "../components/Upload.jsx";
import "./App.css";
import Home from "../components/Home.jsx";
import AnimalsList from "../components/AnimalsList.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Searchpage from "../components/Searchpage.jsx";
import Animal from "../components/Animal.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  return (
    <>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/animals/:type" element={<AnimalsList />} />
          <Route path="/uploads" element={<Upload/>} />
          <Route path="/search" element = {<Searchpage/>} />
          <Route path="/animal/:id" element = {<Animal/>} />
        </Routes>
    </>
  );
}

export default App;
