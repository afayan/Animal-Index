import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Upload from "../components/Upload.jsx";
import "./App.css";
import Home from "../components/Home.jsx";
import AnimalsList from "../components/AnimalsList.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/animals/:type" element={<AnimalsList />} />
        <Route path="/uploads" element={<Upload/>} />
      </Routes>
    </>
  );
}

export default App;
