# Build With Celo Hardhat Workshop

[Youtube Video](https://www.youtube.com/watch?v=W7nGdHKcIFw)

Clone the repo.

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
