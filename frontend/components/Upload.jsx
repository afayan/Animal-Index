import React, { useState } from "react";

function Upload() {
  const [cname, setCName] = useState("");
  const [sname, setSName] = useState("");
  const [type, setType] = useState("");
  const [diet, setDiet] = useState("");
  const [desc, setDesc] = useState("");
  const [blood, setBlood] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    var d = {
      cname:cname,
      sname:sname,
      type:type,
      diet:diet,
      desc:desc,
      blood:blood
    };

    console.log(d);

    fetch("/api/getAnimals", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
       
      }).then((response)=>{
        return response
      }).then((data)=>{
        console.log(data);
      })
  }

  return (
    <div>
      Upload
      <form  className="uploadForm"   encType="multipart/form-data">
        <input
          type="text"
          name="cname"
          id=""
          placeholder="Common Name"
          required
          onChange={(e) => setCName((c) => e.target.value)}
        />
        <input
          type="text"
          name="sname"
          id=""
          placeholder="Scientific Name"
          required
          onChange={(e) => setSName((c) => e.target.value)}
        />

        <select
          name="type"
          id=""
          placeholder="Type"
          onChange={(e) => setType((c) => e.target.value)}
        >
          <option value="">Type</option>
          <option value="Bird">Bird</option>
          <option value="Mammal">Mammal</option>
          <option value="Fish">Fish</option>
          <option value="Reptile">Reptile</option>
        </select>

        <select
          name="diet"
          id=""
          placeholder="Diet"
          onChange={(e) => setDiet((c) => e.target.value)}
        >
          <option value="">Diet</option>
          <option value="Herbivore">Herbivore</option>
          <option value="Carnivore">Carnivore</option>
          <option value="Omnivore">Omnivore</option>
        </select>

        <textarea
          name="desc"
          id=""
          rows={10}
          placeholder="Description"
          onChange={(e) => setDesc((c) => e.target.value)}
        ></textarea>

        <select
          name="blood"
          id=""
         
          onChange={(e) => setBlood((c) => e.target.value)}
        >
          <option value="">Blood temperature</option>
          <option value="Warm">Warm</option>
          <option value="Cold">Cold</option>
        </select>

        <input type="file" name="uploadImage" id="image" />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Upload;
