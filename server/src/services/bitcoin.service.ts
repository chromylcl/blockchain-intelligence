import {
  BitcoinAddressInfo,
  BitcoinRawTransaction,
} from "../types/bitcoin.types";
import { Transaction } from "../types/transaction.types";

export const getBitcoinAddressInfo = async (
  address: string,
): Promise<BitcoinAddressInfo> => {
  const response = await fetch(
    `https://blockstream.info/api/address/${address}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Bitcoin address");
  }
  const data = (await response.json()) as BitcoinAddressInfo;
  return data;
};
export const getBitcoinTransactions = async (
  address: string,
): Promise<Transaction[]> => {
  const response = await fetch(
    `https://blockstream.info/api/address/${address}/txs`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch transactions!");
  }
  const data = (await response.json()) as BitcoinRawTransaction[];
  const transactions = data.map((tx) => {
    let totalIn = 0;
    let totalOut = 0;

    tx.vout.forEach((output) => {
      if (output.scriptpubkey_address === address) {
        totalIn += output.value;
      }
    });
    tx.vin.forEach((input) => {
      if (input.prevout && input.prevout.scriptpubkey_address === address) {
        totalOut += input.prevout.value;
      }
    });
    const net = totalIn - totalOut;

    const type = (net > 0 ? "received" : "sent") as "received" | "sent";

    const amount = Math.abs(net) / 100000000;
    return {
      txid: tx.txid,
      amount: amount,
      type: type,
      timestamp: tx.status.block_time || Math.floor(Date.now() / 1000),
      fee: tx.fee / 100000000,
    };
  });
  return transactions;
};
