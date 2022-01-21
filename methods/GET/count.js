import Cache from "../../modules/Cache.js"
import Response from "../../modules/Response.js"

export default {
    path: '/count',
    callback: async(req, res) => {
        res.send(Response.success(Cache.tracks ? Cache.tracks.length.toString() : '0'));
    }
}