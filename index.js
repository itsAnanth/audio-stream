import express from 'express';
import cors from 'cors';
import getVideos from './modules/getVideos.js';
import Server from './server.js';


const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.KEY;

getVideos(apiKey)


app.use(cors());

new Server(app, PORT, true);









