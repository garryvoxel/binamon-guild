# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

// Deploy factory script
npx hardhat run scripts/deploy_factory.ts --network bcstest

// Verify factory contract
npx hardhat verify --network bsctest 0x7e707765690F50EFB354C07BB5F7D330533B2b2f "0x6b8b0F2830f09B453aD8bB794CeA6249520F5705" "0x6b8b0F2830f09B453aD8bB794CeA6249520F5705" "0xF324A76D7273C3f0e4629d27581F7A16f7B7Fbd6" "0x8B4c22a7F50369d360bC0C70C4AF79E8C6aB1aCA" "0x36C2fa576C6Ae41a9b7bB860223Af842BA3af5d4" "0xE7d24522B5866bfcFC17929061B673A8e09fD075" "0xb87D8588fb1ac132fe6c69aa377349B39b0f8f41"