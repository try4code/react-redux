import express from 'express';
import dotenv from 'dotenv';
import db from './db/db.js';

dotenv.config();
db();

const app = express();


const PORT = process.env.PORT || 5000


app.get('/:name', (req, res) => {
    res.send("successfuly running")
});


app.listen(PORT, (req, res) => {
    console.log(`listening on port ${PORT} successfully`);
});