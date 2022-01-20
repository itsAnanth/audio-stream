import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';
import ytdl from 'ytdl-core';

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.KEY;

let videoArray;
getVideos();



app.use(cors());

app.get('/', () => 'Reached streaming server');

app.get('/audio', async (req, res) => {
    if (!videoArray) return res.send('Video loader failed');
    const index = req.query.index;
    const videoId = videoArray[index]

    if (!videoId) return res.send('Invalid index provided');

    const videoURL = `https://www.youtube.com/watch?v=${videoArray[index]}`;

    console.log(videoURL);
    const info = await ytdl.getInfo(videoURL);
    const title = info.videoDetails.title;
    res.header('Content-Disposition', `attachment;\ filename="${title}.mp3"`);
    ytdl(videoURL, { filter: 'audioonly' }).pipe(res);
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

async function getVideos() {
    const playlistId = 'PL7UBquYJZeCU6tqK-XaO84vjJfwlEox55';
    const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
    const res = await fetch(endpoint).catch(console.log);
    const result = await res.json();
    videoArray = result.items.map(x => x.snippet.resourceId.videoId);
    console.log('Loaded video metadata');
};