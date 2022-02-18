import getVideos from "../../modules/getVideos.js";
import Response from "../../modules/Response.js";

export default {
    path: '/refresh',
    callback: async(req, res) => {
        const devKey = process.env.DEVKEY;
        const key = req.query.key;

        if (!key || key != devKey) return res.send(Response.error('Invalid dev key'));

        getVideos(process.env.KEY);
        res.send(Response.success('Refreshed tracks cache'));
    }
}