import fs from 'fs';

const methodsPath = fs.readdirSync('./methods');

class Server {
    constructor(server, PORT, autoHandle) {
        this.server = server;
        this.methods = {};
        this.PORT = PORT || 3000;
        this.autoHandle = autoHandle || true;
        this.init().then(() => this.handleRequests() && (this.autoHandle && this.listenToPort()));
    }

    async init() {
        for (let i = 0; i < methodsPath.length; i++) {
            const method = methodsPath[i];
            const routesPath = fs.readdirSync(`./methods/${method}`);
            for (let j = 0; j < routesPath.length; j++) {
                const route = (await import(`./methods/${method}/${routesPath[j]}`)).default;
                !this.methods[method] && (this.methods[method] = []);
                this.methods[method].push(route);
            }
        }
    }

    handleRequests() {
        for (const [key, value] of Object.entries(this.methods)) {
            for (let route = 0; route < value.length; route++) {
                const { path, callback } = value[route];
                this.server[`${key.toLowerCase()}`].apply(this.server, [path, callback]);
            }
        }
        return true;
    }

    listenToPort() {
        this.server.listen(this.PORT, () => console.log(`Listening on port ${this.PORT}`));
    }
}


export default Server;