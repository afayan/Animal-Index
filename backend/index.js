import express from 'express'
import mysql2 from 'mysql2'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import multer from 'multer'

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

dotenv.config()

const db = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password: process.env.SQL_PASSWORD,
    database: 'animals'
})

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Hello Animals")
})

app.post('/api/getAnimals', (req, res)=>{
    const data = req.body
    console.log(data);

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

        console.log(result);
        return result
    })


    res.send({
        message: "Done"
    })

})

app.post('/api/uploadImage', upload.single('uploadImage'), (req, res)=>{
    console.log(req);
    res.send("Image upload")
})

const port = 3000

app.listen(port, ()=>{
    console.log("Server is listening on port "+port);
})