// require("@nomicfoundation/hardhat-toolbox");
require("hardhat-celo");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.8.9",
            },
        ],
    },
    networks: {
        alfajores: {
            // can be replaced with the RPC url of your choice.
            url: "https://alfajores-forno.celo-testnet.org",
            accounts: ["<YOUR_PRIVATE_KEY>"],
        },
        celo: {
            url: "https://forno.celo.org",
            accounts: ["<YOUR_PRIVATE_KEY>"],
        },
    },
    etherscan: {
        apiKey: {
            alfajores: "<CELOSCAN_API_KEY>",
            celo: "<CELOSCAN_API_KEY>",
        },
    },
};
