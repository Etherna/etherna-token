const HDWalletProvider = require('@truffle/hdwallet-provider');
const LedgerWalletProvider = require('truffle-ledger-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

const ledgerOptions = {
  networkId: 137, // polygon mainnet
  path: "m/44'/60'/0'/0", // ledger live default derivation path
  askConfirm: false,
  accountsLength: 1,
  accountsOffset: 0,
};

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    matic: {
      provider: () => new LedgerWalletProvider(ledgerOptions, `https://polygon-rpc.com/`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://matic-mumbai.chainstacklabs.com`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.12",
    }
  }
}