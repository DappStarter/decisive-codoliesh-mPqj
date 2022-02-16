require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain hospital good kiwi bottom sketch'; 
let testAccounts = [
"0x62d970b6ab6b364fb4fea8c85d1a20a002c67ecadd2629d07ce50e9c14638976",
"0xe3a3ce2779eeff0035552af5b356e200bc663c8d981971ad9ec71b0d27eb5d57",
"0x07328cce220737c3e785e2f8672ae7ae9aa0389a8d451db993eee537a84be800",
"0x81b3309ba53d12899f3bb842269aa322f82cdbe32bf7546f8ec584d820beb4ad",
"0x9f59e7188cfe8766adbadf3c0418c50469debb89b61b455adfb6c194e7bfe4a2",
"0x15eb0d6c68de7016992b9c05910e45ba6714b4909109fd71b13345559da75799",
"0x9e340315b68faa1bfb18aa1bc28472e252b9bb46ead9290e09f21f7228067bcb",
"0xfc6bb20221d75f50cb86c75cdf626ba8b1124ec38c333e9298111d13a8c04747",
"0x77e7186ed25fde889bf10c82ac7a0ca564b3f34b3401733d06ed58231de9bbc5",
"0x70c66b4fb203b4840b7aacd4b9f07e426581b921b5098551a41f36ea71104d84"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

