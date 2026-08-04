import { getBitcoinAddressInfo } from "./bitcoin.service";
export const analyzeWallet = async (address: string) => {
  const addressInfo = await getBitcoinAddressInfo(address);
  const totalReceivedBTC = addressInfo.chain_stats.funded_txo_sum / 100000000;
  const totalSentBTC = addressInfo.chain_stats.spent_txo_sum / 100000000;
  const balanceBTC =
    (addressInfo.chain_stats.funded_txo_sum -
      addressInfo.chain_stats.spent_txo_sum) /
    100000000;
  const txCount = addressInfo.chain_stats.tx_count;
  return {
    address,
    balance: balanceBTC,
    totalReceived: totalReceivedBTC,
    totalSent: totalSentBTC,
    txCount,
  };
};
