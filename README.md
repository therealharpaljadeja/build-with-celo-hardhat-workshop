# Build With Celo Hardhat Workshop

[Youtube Video](https://www.youtube.com/watch?v=W7nGdHKcIFw)

Clone the repo.

Add respective keys or comment it out if you don't need it:

```js

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

```


To compile contracts:

```shell
npx hardhat compile
```

To run tests:

```shell
npx hardhat tests
```

To deploy contracts:

```shell
npx hardhat run scripts/deploy.js --network <network_name>
```

To verify contracts (using hardhat-celo):

```shell
npx hardhat verify <contract_address> <constructor_args> --network alfajores
```
