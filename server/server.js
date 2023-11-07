const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"root123",
  database:"lang"
})

app.post('/login', (req,res) => {
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  console.log(req.body);
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if(err) return res.json("Error");
    if(data.length > 0){
      return res.json("Login Successfully")
    } else {
      return res.json("No Record")
    }
  })
})

app.listen(7081, () =>{
  console.log("Listening....");
})