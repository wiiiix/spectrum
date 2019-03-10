"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __importStar(require("uuid"));
var Client = /** @class */ (function () {
    function Client(socket, isServer) {
        var self = this;
        self.socket = Client.createSocket(socket);
        self.name = "";
        self.pending = {};
        self.id = uuid.v4();
    }
    return Client;
}());
exports.Client = Client;
