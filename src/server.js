"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require('child_process').spawn;
var Server = /** @class */ (function () {
    function Server(opts) {
        this.opts = opts ? opts : defaults;
        if (!this.opts.rpc.port) {
            throw new Error("Port must be set");
        }
        if (!this.opts.rpc.pass) {
            throw new Error("Password must be set");
        }
        if (!this.opts.rpc.wallet_path) {
            throw new Error("Wallet path must be set");
        }
    }
    Server.prototype.connect = function () {
        this.api = spawn('../bin/testnet/wallet-api/wallet-api-testnet $GENERAL $AUTHORIZATION $TLS', {
            stdio: 'inherit',
            shell: true,
            env: {
                GENERAL: "--pass=" + this.opts.general.pass + " --node_addr=" + this.opts.general.host + ":" + this.opts.general.port + " --wallet_path=" + this.opts.general.wallet_path,
                AUTHORIZATION: '',
                TLS: ''
            }
        });
        console.log(api);
    };
    Server.prototype.close = function () {
        if (this.api) {
            this.api.kill();
        }
    };
    return Server;
}());
exports.Server = Server;
var defaults = {
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
        pass: 'hskang77',
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
};
