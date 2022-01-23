export default {
    path: '/test',
    callback: async(req, res) => {
        console.log(req.body);
        res.send('test');
    }
}
