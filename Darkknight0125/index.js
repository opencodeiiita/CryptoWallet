const dotenv = require('dotenv');
const web3 = require('web3');
dotenv.config();

console.log(`Get block API Token: ${process.env.apiToken}`);
console.log(`Wallet private key: ${process.env.privateKey}`);