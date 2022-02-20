import Cache from "../../modules/Cache.js";
import ytdl from "ytdl-core";
import Response from "../../modules/Response.js";
import clean from 'content-disposition';
export default {
    path: '/audio',
    callback: async (req, res) => {
        if (!Cache.tracks) return res.send(Response.error('Video loader error'));
    
        const index = req.query.index;
        const video = Cache.tracks[index];

        if (!video) return res.send(Response.error('Invalid Index'));

        const videoURL = `https://www.youtube.com/watch?v=${video.id}`;

        console.log(videoURL);

        const title = video.title
        res.header('Content-Disposition', `attachment;\ filename="audio.mp3"`));
        ytdl(videoURL, { filter: 'audioonly' }).pipe(res);
    }
}
