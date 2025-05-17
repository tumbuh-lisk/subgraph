import { createConfig } from "ponder";
import { http } from "viem";
import { IDRXVaultABI } from "./abis/IDRXVault.abi";

export default createConfig({
  // database: {
  //   kind: "postgres",
  //   connectionString: process.env.PONDER_DATABASE_URL,
  // },
  networks: {
    liskSepolia: {
      chainId: 4202,
      transport: http(process.env.PONDER_RPC_URL_1),
      // pollingInterval: 2000,
    },
  },
  contracts: {
    IDRXVault: {
      network: "liskSepolia",
      abi: IDRXVaultABI,
      address: "0x8A365B70A72b325f61D854560aFe29b40A8a8d50",
      startBlock: 21077926,
    },
  },
});
