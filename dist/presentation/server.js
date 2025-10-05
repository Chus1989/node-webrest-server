import express from "express";
export class Server {
    constructor() {
        this.app = express();
    }
    async start() {
        this.app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    }
}
//# sourceMappingURL=server.js.map