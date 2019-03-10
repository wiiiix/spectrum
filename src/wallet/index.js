"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mapper_1 = __importDefault(require("../utils/mapper"));
/*
create_address
validate_address
tx_send
tx_status
tx_split
tx_list
tx_cancel
wallet_status
get_utxo
tx_list
tx_cancel
*/
function createAddress(lifetime) {
    var request = mapper_1.default.toPayload('create_address', { 'lifetime': lifetime });
    return JSON.stringify(request);
}
exports.createAddress = createAddress;
function validateAddress(address) {
    var request = mapper_1.default.toPayload('validate_address', { 'address': address });
    return JSON.stringify(request);
}
exports.validateAddress = validateAddress;
function sendTransaction(value, fee, from, address, comment) {
    var request = mapper_1.default.toPayload('tx_send', { 'value': value, 'fee': fee, 'from': from, 'address': address, 'comment': comment });
    return JSON.stringify(request);
}
exports.sendTransaction = sendTransaction;
