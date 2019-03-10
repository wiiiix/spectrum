import * as net from "net";
import * as uuid from "uuid";

export class Client {
    socket: net.Socket;
    id: String;
    name: String;
    pending: any;
    constructor(socket?: net.Socket, isServer?: boolean) {
        const self = this;
        self.socket = Client.createSocket(socket);
        self.name = "";
        self.pending = {};
        self.id = uuid.v4();

    }
}