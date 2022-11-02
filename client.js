const { Qweb3 } = require('qweb3');
const username = 'username';
const password = 'password';
const rpcAddress = `http://${username}:${password}@localhost:13889`; //@localhost:13889
const qweb = new Qweb3(rpcAddress);
