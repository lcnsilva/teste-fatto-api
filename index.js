import express from 'express';
import 'dotenv/config'
import dbConnection from './config/dbConnection.js'
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;
const result = await dbConnection();

app.use(express.json())
app.use(routes);

app.listen(PORT, (req,res) => {
    console.log(`Rodando na porta ${PORT}`)
});