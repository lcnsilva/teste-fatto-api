import express from 'express';
import dotenvx from '@dotenvx/dotenvx';
import dbConnection from './config/dbConnection.js'

const app = express();
const result = await dbConnection();
dotenvx.config();
app.get('/', (req,res) => {
    res.send('teste' + result);
})

app.listen(3000, (req,res) => {
    console.log('Rodando na porta 3000.')
});