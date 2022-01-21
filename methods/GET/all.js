import Cache from "../../modules/Cache.js"
import Response from "../../modules/Response.js"

export default {
    path: '/all',
    callback: async(req, res) => {
        res.send(Response.success(Cache.tracks));
    }
}