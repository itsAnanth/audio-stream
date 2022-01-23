import express from 'express';
import cors from 'cors';
import getVideos from './modules/getVideos.js';
import Server from './server.js';
import multer from 'multer';

const upload = multer();
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.KEY;

getVideos(apiKey)

app.use(upload.none())
app.use(cors());

new Server(app, PORT, true);
