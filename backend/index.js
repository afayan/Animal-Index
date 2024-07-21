import express from 'express'
import mysql2 from 'mysql2'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import multer from 'multer'
import url from 'url'
import path from 'path'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,file.originalname)
    }
  })

const upload = multer({ storage: storage })
//name = uploadImage


const db = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.SQL_PASSWORD,
    database: 'animals'
})

const app = express()

app.use(bodyParser.json())

app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.send("Hello Animals")
})

app.post('/api/getAnimals', (req, res)=>{
    const data = req.body
    // console.log(data);


    // // var d = {
    //     cname:cname,
    //     sname:sname,
    //     type:type,
    //     diet:diet,
    //     desc:desc,
    //     blood:blood
    //   };///

    // id          | int           | NO   | PRI | NULL     | auto_increment |
    // | common_name | varchar(500)  | YES  |     | NULL     |                |
    // | sci_name    | varchar(600)  | YES  |     | NULL     |                |
    // | type        | varchar(100)  | YES  |     | NULL     |                |
    // | habitat     | varchar(100)  | YES  |     | NULL     |                |
    // | diet        | varchar(100)  | YES  |     | NULL     |                |
    // | blood       | varchar(100)  | YES  |     | NULL     |                |
    // | image       | varchar(1000) | YES  |     | terr.jpg |                |
  

    const variables = [data.cname, data.sname, data.type, data.desc, data.diet, data.blood, data.image]

    const query = "insert into animal_data(common_name, sci_name, type, description, diet, blood, image) values (?,?,?,?,?,?,?);"

    db.query(query, variables, (err, result)=>{
        if (err) {
            return err
        }

        // console.log(result);
        return result
    })


    res.send({
        message: "Done"
    })

})

app.post('/api/uploadImage', upload.single('uploadImage'), (req, res)=>{
    // console.log(req);
    res.send("Image upload")
})

app.post('/api/search', (req, res)=>{

    const imageUrl = 'http://localhost:3000/uploads/'
    const query = '%'+ req.body.query + '%'
    console.log(query);

    const s = "select id, common_name, sci_name, concat( 'http://localhost:3000/uploads/', image) as imageURL from animal_data where common_name like ? or sci_name like ? ;"

    db.query(s, [query, query], (err, result)=>{
        if (err) {
            console.log(err);
        }
        console.log(result);
        console.log("next");
        res.json(result)
    })
})

app.post('/api/aisearch', (req, res)=>{
    const data = req.body.prompt
    // console.log(data);


    async function run() {
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      
        const prompt = data 

        console.log(prompt);
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log(text);
        res.json({text: text})
      }
      
      run();
})

app.post('/api/aifill',async (req, res)=>{
    const cname = req.body.cname
    console.log(cname);

    var details = {

    }

    async function run(field) {
        // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
      
        var prompt = ''

        if (field === 'description'){
            prompt = "write a description about "+ cname
        }
        else{

            prompt = `what is the ${field} of ${cname}? Return you response in words only. No sentences` 
        }

        console.log(prompt);

        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log(text);
        details[field] = text
      }
      

      const dArray = ['Scientific name', 'Animal category (eg: mammal)', "diet (eg: carnivore)", "description", "warm/cold blooded"]
      

    await Promise.all(dArray.map(field => run(field)));

    console.log(details);
    res.send(JSON.stringify(details)); // Send the details object as a response

})

app.get('/api/getAnimalProfile/:id', (req, res)=>{
    const id = req.params.id
    console.log(id);


    const pq = "select * from getanimals where id = ? ;"

    db.query(pq, [id], (err, result)=>{
        if (err) {
           console.log(err);
           return err
        }

        res.send(result)
    })
})

const port = 3000

app.listen(port, ()=>{
    console.log("Server is listening on port "+port);
})