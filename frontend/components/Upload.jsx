import React, { useState, useRef } from "react";

function Upload() {
  const [cname, setCName] = useState("");
  const [sname, setSName] = useState("");
  const [type, setType] = useState("");
  const [diet, setDiet] = useState("");
  const [desc, setDesc] = useState("");
  const [blood, setBlood] = useState("");
  const [image, setFile] = useState(null);

  const [prompt, setPrompt] = useState("");
  const aichat = useRef("");
  const dietRef = useRef();
  const cnameRef = useRef()
  const snameref = useRef()
  const typeRef = useRef()
  const descRef = useRef()
  const bloodRef = useRef()
  

  function handleSubmit(event) {
    event.preventDefault();

    var d = {
      cname: cname,
      sname: sname,
      type: type,
      diet: diet,
      desc: desc,
      blood: blood,
      image: image.name,
    };

    console.log(d);
    console.log(image.name);
    // image.name = Date.now() + '-' + Math.round(Math.random() * 1E9) + image.name

    fetch("/api/getAnimals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log(data);
      });

    const formdata = new FormData();
    formdata.append("uploadImage", image);

    fetch("/api/uploadImage", { method: "POST", body: formdata });

    alert("submitted");
  }

  function autoFillAI() {

    if (cname) {
      var d = {
        cname: cname,
      };
  
      
      console.log(d);


      fetch('/api/aifill',
        {
          method:'post',
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(d)
        }
      ).then((r)=>{
        return r.json()
      }).then((data)=>{
        console.log(data);
        // console.log(dietRef.current);

        // // sname.value = "Carnivore"
        // console.log(snameref.current);

        snameref.current.value = data['Scientific name']
        setSName(s=>data['Scientific name'])
        // typeRef.current.value = data['Animal category (eg: mammal)']
        // dietRef.current.value = data['diet (eg: carnivore)']
        // bloodRef.current.value = data['warm/cold blooded']
        descRef.current.value = data['description']
        setDesc(d=>data['description'] )

      })

      //here work

      
    }
    else{
      alert("Please enter common name first")
    }

  }

  async function handleAI() {
    console.log(prompt);

    var p = {
      prompt: prompt,
    };

    fetch("/api/aisearch", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(p),
    })
      .then((airesp) => {
        console.log("hey");
        console.log(airesp);
        return airesp.json();
      })
      .then((data) => {
        console.log(data.text);
        console.log(aichat.current.innerHTML);
        aichat.current.innerHTML = data.text;
      });
  }

  return (
    <div className="uploads">
      <img src="/lionfish.jpg" className="uploadbg" alt="" />

      <form className="uploadForm" encType="multipart/form-data">
        <input
          type="text"
          name="cname"
          id="formInput"
          placeholder="Common Name"
          required
          onChange={(e) => setCName((c) => e.target.value)}
        />
        <input
          type="text"
          name="sname"
          id="formInput"
          placeholder="Scientific Name"
          required
          onChange={(e) => setSName((c) => e.target.value)}
          ref={snameref}
        />

        <select
          name="type"
          id=""
          placeholder="Type"
          onChange={(e) => setType((c) => e.target.value)}
          ref={typeRef}
        >
          <option value="">Select Type</option>
          <option value="Bird">Bird</option>
          <option value="Mammal">Mammal</option>
          <option value="Fish">Fish</option>
          <option value="Insect">Insect</option>

          <option value="Reptile">Reptile</option>
        </select>

        <select
          name="diet"
          id=""
          placeholder="Diet"
          onChange={(e) => setDiet((c) => e.target.value)}
          ref={dietRef}
        >
          <option value="">Select Diet</option>
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
          ref={descRef}
        ></textarea>

        <select
          name=""
          id=""
          placeholder="Blood"
          onChange={(e) => setBlood((c) => e.target.value)}
          ref={bloodRef}
        >
          <option value="">Select Blood temperature</option>
          <option value="Warm">Warm</option>
          <option value="Cold">Cold</option>

          
        </select>

        <input
          type="file"
          name="uploadImage"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>

      <div className="aibox">
        <button
          onClick={() => {
            autoFillAI();
          }}
        >
          Autofill with AI
        </button>
        <input
          type="text"
          id="prompt"
          onChange={(e) => setPrompt((p) => e.target.value)}
        />
        <button onClick={handleAI}>Search</button>

        <pre className="aichatbox" ref={aichat}>
          Write a prompt to generate
        </pre>
      </div>
    </div>
  );
}

export default Upload;
