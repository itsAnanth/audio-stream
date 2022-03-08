import Response from "../../modules/Response.js"

export default {
    path: '/ping',
    callback: async(req, res) => {
        res.send(Response.success('pong'));
    }
}
