const { Qweb3 } = require('qweb3');
const username = 'username';
const password = 'password';
const rpcAddress = `http://${username}:${password}@localhost:13889`; //@localhost:13889
const qweb = new Qweb3(rpcAddress);

const fs = require("fs");
const contractAddress = "1f2bcb283102523a7ced458da6026882d807b88c";
let ABI = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi").toString();
ABI = JSON.parse(ABI);
