import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      // a fixed gasPrice could be set, it will be useful when testing gas consumption
      gasPrice: 1000000000,
    },
  },
  // setting of testing framework
  mocha: {
    timeout: 20000, // max waiting time of running unit test
  },
}

export default config
