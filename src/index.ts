import { createHash, randomBytes } from "crypto";
import { ponder } from "ponder:registry";
import { Deposit, Withdrawn } from "ponder:schema";

const handleEvent = async (table: any, event: any, context: any, extraValues = {}) => {
  const randomValue = randomBytes(16).toString("hex");
  const id = createHash("sha256")
    .update(`
      ${event.transaction.hash}
      -${event.block.number}
      -${event.block.timestamp}
      -${randomValue}
      `.trim())
    .digest("hex");

  await context.db.insert(table).values({
    id: id,
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
    transactionHash: event.transaction.hash,
    ...extraValues,
  });
};

ponder.on("IDRXVault:Deposit", async ({ event, context }) => {
  await handleEvent(Deposit, event, context, {
    sender: event.args.sender.toLowerCase(),
    owner: event.args.owner.toLowerCase(),
    assets: event.args.assets,
    shares: event.args.shares,
  });
});

ponder.on("IDRXVault:Withdrawn", async ({ event, context }) => {
  await handleEvent(Withdrawn, event, context, {
    owner: event.args.owner.toLowerCase(),
    receiver: event.args.receiver.toLowerCase(),
    sIDRXAmount: event.args.sIDRXAmount,
    idrxAmount: event.args.idrxAmount,
  });
});