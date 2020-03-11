require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purpose inner enter bright test'; 
let testAccounts = [
"0x43ea5e4fbc58122bba5d53c7b1c117c8848f83b75461d1c5c5323d004cc48f16",
"0xf1fa2246fd99c7e9d76963aeddfbd36c96a8be22c9b1956ef3d95c47ce6afffe",
"0x076ff9ea1c2325949899472cd400ac0b9a266a83b065d2973b8bb8371022c013",
"0xb4f3fcd54087f740ea3e41f803b6c36f6fef70107a6feee29eb410e33ddc2e47",
"0x940a5ad2ea3c141db0b19a107d888e630ebc5fb92f8278346866363149f7c780",
"0x61d75b9e6ad41e90330be3d4d5b773b1fce7b9c4c92aefe4d31b27106b780f74",
"0x72a56d5b45b56ffaf37ce6a170a4cb72fa6461bafb715bbdd6e951d464988789",
"0xd231fecc0fd7e24a471599381e35771bc047a5f2c933b3bf4c2386802184cccf",
"0x7f9ea6f7eff6a66b6316c6647f10b38badb543131700727bded7297f1e16a48f",
"0x7921d6e3221aa0fe4de173ee66fd86590ebd27658e2a226e764864deb2b8e25b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
