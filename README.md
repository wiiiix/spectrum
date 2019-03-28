![Spectrum logo](https://i.imgur.com/HbEfHsQ.png)

# spectrum 
Spectrum is Beam implementation of Stratum protocol (server and client) in [BIP 41](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-February/015728.html)


You need to run a local or remote Beam node to use this library.

## Install

```bash
npm install spectrum
```

## Usage

```js
var Server = require('spectrum').Server;

// these settings can be changed using Server.defaults as well, for every new server up
var server = new Server({
    rpc: {
        /**
         * Address of BEAM node
         *
         * @type {String}
         */
        host: "localhost",
        /**
         * BEAM node port
         *
         * @type {Number}
         */
        port: 11005,
        /**
         * wallet password
         *
         * @type {String}
         */
        pass: 'password',
        /**
         * wallet.db path
         *
         * @type {String}
         */
        wallet_path: '../bin/testnet/wallet/wallet.db',
        /**
         * use http
         *
         * @type {Number}
         */
        use_http: 0,
        /**
         * IP whitelist
         *
         * @type {Array(String)}
         */
        ip_whitelist: []
    },
    authorization: {
        /**
         * Use Access Control List (ACL)
         *
         * @type {Bool}
         */
        use_acl: false,
        /**
         * Path to ACL file
         *
         * @type {String}
         */
        acl_path: null
    },
    tls: {
        /**
         * Use TLS protocol
         *
         * @type {Number}
         */
        use_tls: 0,
        /**
         * Path to TLS Certificate (=wallet_api.crt)
         *
         * @type {String}
         */
        tls_cert: null,
        /**
         * Path to TLS private key (=wallet_api.key)
         *
         * @type {String}
         */
        tls_key: null
    }
});

server.on('mining', function(req, deferred){
    switch (req.method){
        case 'subscribe':
            // req.params[0] -> if filled, it's the User Agent, like CGMiner/CPUMiner sends
            // Just resolve the deferred, the promise will be resolved and the data sent to the connected client
            deferred.resolve([subscription, extranonce1, extranonce2_size]);
            break;
    }
});

server.listen();
```

You can connect to Stratum servers as well:

```js
var Client = require('spectrum').Client;

client = new Client();

client.connect({
    host: 'localhost',
    port: 3333
}).then(function(){
    return ...;
}).then(function(value){
    if (value){
        //etc
    }
});

```

## Examples

Check the `examples` folder, each part (client and server) is completely explained, and how to proceed on each possible case.

## Documentation

Documentation is generated from [typedoc]().

# Development

BTC: bc1qvps8w5xe47p55qqqakwkpwhf5fejvadwstemca  
BCH: qq76juylcjpfkkuwz9x7u42rfjgfvqz7lgzgllrvhw  
LTC:ltc1q3nm0nfadjnc69h25fyw8fnl042j9ufc9pqv4ne  
ETH: 0xa252c0550031F9b4E02025d88a8DE3C0C42eaDff  
ZEC: t1aJF96U5aAb9JwN8YFjBeeF4gMRhLwgMSf    
XZC: aF6UeWxNKttFsdoBpBVy1B4Sa3NxUij22E  
DASH: Xt5gBKtXauUY3J1Hnr5CRZKuWUksdoCxdG    
XRB: xrb_1nyzmur3i3gttp4epn19pdi3uaccg7ap8mzyxu6n7gywbtgwjk9hpnzitbwh    
