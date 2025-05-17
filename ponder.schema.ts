import { onchainTable } from "ponder";

export const AIAgentSet = onchainTable("AIAgentSet", (t) => ({
  id: t.text().primaryKey(),
  agent: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Approval = onchainTable("Approval", (t) => ({
  id: t.text().primaryKey(),
  owner: t.text(),
  spender: t.text(),
  value: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const CurrentAPYUpdated = onchainTable("CurrentAPYUpdated", (t) => ({
  id: t.text().primaryKey(),
  apy: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Deposit = onchainTable("Deposit", (t) => ({
  id: t.text().primaryKey(),
  sender: t.text(),
  owner: t.text(),
  assets: t.numeric(),
  shares: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const DepositeCompleted = onchainTable("DepositeCompleted", (t) => ({
  id: t.text().primaryKey(),
  user: t.text(),
  assets: t.numeric(),
  shares: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const EmergencyProtocolWithdrawal = onchainTable("EmergencyProtocolWithdrawal", (t) => ({
  id: t.text().primaryKey(),
  protocol: t.text(),
  token: t.text(),
  amount: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const EmergencyWithdrawal = onchainTable("EmergencyWithdrawal", (t) => ({
  id: t.text().primaryKey(),
  token: t.text(),
  amount: t.numeric(),
  recipient: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const MintCompleted = onchainTable("MintCompleted", (t) => ({
  id: t.text().primaryKey(),
  user: t.text(),
  shares: t.numeric(),
  assets: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Paused = onchainTable("Paused", (t) => ({
  id: t.text().primaryKey(),
  account: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const RoleAdminChanged = onchainTable("RoleAdminChanged", (t) => ({
  id: t.text().primaryKey(),
  role: t.text(),
  previousAdminRole: t.text(),
  newAdminRole: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const RoleGranted = onchainTable("RoleGranted", (t) => ({
  id: t.text().primaryKey(),
  role: t.text(),
  account: t.text(),
  sender: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const RoleRevoked = onchainTable("RoleRevoked", (t) => ({
  id: t.text().primaryKey(),
  role: t.text(),
  account: t.text(),
  sender: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const StrategyFundsDeployed = onchainTable("StrategyFundsDeployed", (t) => ({
  id: t.text().primaryKey(),
  protocol: t.text(),
  token: t.text(),
  amount: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const StrategyFundsWithdrawn = onchainTable("StrategyFundsWithdrawn", (t) => ({
  id: t.text().primaryKey(),
  protocol: t.text(),
  token: t.text(),
  amount: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const StrategyUpdated = onchainTable("StrategyUpdated", (t) => ({
  id: t.text().primaryKey(),
  targetToken: t.text(),
  protocol: t.text(),
  allocation: t.numeric(),
  expectedYield: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const SupportedTokenSet = onchainTable("SupportedTokenSet", (t) => ({
  id: t.text().primaryKey(),
  token: t.text(),
  isSupported: t.boolean(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const SwapRouterSet = onchainTable("SwapRouterSet", (t) => ({
  id: t.text().primaryKey(),
  oldRouter: t.text(),
  newRouter: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Transfer = onchainTable("Transfer", (t) => ({
  id: t.text().primaryKey(),
  from: t.text(),
  to: t.text(),
  value: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Unpaused = onchainTable("Unpaused", (t) => ({
  id: t.text().primaryKey(),
  account: t.text(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Withdraw = onchainTable("Withdraw", (t) => ({
  id: t.text().primaryKey(),
  sender: t.text(),
  receiver: t.text(),
  owner: t.text(),
  assets: t.numeric(),
  shares: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const Withdrawn = onchainTable("Withdrawn", (t) => ({
  id: t.text().primaryKey(),
  owner: t.text(),
  receiver: t.text(),
  sIDRXAmount: t.numeric(),
  idrxAmount: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));

export const YieldHarvested = onchainTable("YieldHarvested", (t) => ({
  id: t.text().primaryKey(),
  amount: t.numeric(),
  yieldRate: t.numeric(),
  blockNumber: t.integer(),
  blockTimestamp: t.integer(),
  transactionHash: t.text(),
}));
