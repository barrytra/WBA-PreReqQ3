import { Keypair } from "@solana/web3.js";

import fs from 'fs';


//Generate a new keypair
let kp = Keypair.generate()

console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`)

const data = `[${kp.secretKey}]`;

fs.writeFile('dev-wallet.json', data, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('JSON file has been saved.');
    }
});