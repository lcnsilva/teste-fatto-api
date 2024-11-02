import express from 'express';
import 'dotenv/config'
import dbConnection from './config/dbConnection.js'
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const result = await dbConnection();

const allowedOrigins = ['http://localhost:5173', 'https://teste-fatto-interface.vercel.app/'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            console.log('Origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(routes);

app.listen(PORT, (req,res) => {
    console.log(`Rodando na porta ${PORT}`)
});