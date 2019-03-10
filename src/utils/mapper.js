"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messageId = 0;
var JsonRpcMapper = /** @class */ (function () {
    function JsonRpcMapper() {
    }
    /**
     * Creates a valid json payload object
     *
     * @method toPayload
     *
     * @param {String} method
     * @param {Object} params
     *
     * @returns {Object}
     */
    JsonRpcMapper.toPayload = function (method, params) {
        if (!method) {
            throw new Error("JSONRPC method should be specified for params: \"" + JSON.stringify(params) + "\"!");
        }
        var id = messageId;
        messageId++;
        return {
            jsonrpc: '2.0',
            id: id,
            method: method,
            params: params || {}
        };
    };
    return JsonRpcMapper;
}());
exports.default = JsonRpcMapper;
