let messageId = 0;

export default class JsonRpcMapper {
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
    static toPayload(method:string, params:Object) {
        if (!method) {
            throw new Error(`JSONRPC method should be specified for params: "${JSON.stringify(params)}"!`);
        }

        const id = messageId;
        messageId++;

        return {
            jsonrpc: '2.0',
            id,
            method,
            params: params || {}
        };
    }
}