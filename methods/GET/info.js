import Cache from "../../modules/Cache.js";
import Response from "../../modules/Response.js";

export default {
    path: '/info',
    callback: async(req, res) => {
        const index = req.query.index;

        if (!index || !Cache.tracks[index]) return res.send(Response.error('Invalid index'));

        res.send(Response.success(Cache.tracks[index]));
    }
}