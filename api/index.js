import express from 'express';
import 'dotenv/config'
import dbConnection from './config/dbConnection.js'


const app = express();
const PORT = process.env.PORT || 3000;
const result = await dbConnection();

app.get('/', (req,res) => {
    res.send('teste' + result);
})

app.listen(PORT, (req,res) => {
    console.log(`Rodando na porta ${PORT}`)
});