export default {
    path: '/test',
    callback: async(req, res) => {
        console.log(req, req.body);
        res.send('test');
    }
}
