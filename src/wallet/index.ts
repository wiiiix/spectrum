import JsonRpcMapper from '../utils/mapper'

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
export function createAddress(lifetime: number): any {
	var request = JsonRpcMapper.toPayload('create_address', {'lifetime': lifetime})
	return JSON.stringify(request)
}

export function validateAddress(address: string): any {
	var request = JsonRpcMapper.toPayload('validate_address', {'address': address})
	return JSON.stringify(request)
}

export function sendTransaction(value: number, fee: number, from: string, address: string, comment: string): any {
	var request = JsonRpcMapper.toPayload('tx_send', {'value': value, 'fee': fee, 'from': from, 'address': address, 'comment': comment})
	return JSON.stringify(request)
}

