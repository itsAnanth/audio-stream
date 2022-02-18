import Cache from "./Cache.js";
import fetch from 'node-fetch';
async function getVideos(apiKey) {
    const playlistId = 'PL7UBquYJZeCU6tqK-XaO84vjJfwlEox55';
    const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
    const res = await fetch(endpoint).catch(console.log);
    const result = await res.json();
    Cache.tracks = result.items.map(x => ({ id: x.snippet.resourceId.videoId, title: x.snippet.title, thumbnail: x.snippet.thumbnails.default.url }));
    console.log('Loaded video metadata');
};

export default getVideos;
