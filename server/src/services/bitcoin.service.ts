import { BitcoinAddressInfo } from "../types/bitcoin.types";
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
  const data: any[] = await response.json();
  return data;
};
