export interface BitcoinAddressStats {
  funded_txo_count: number;
  funded_txo_sum: number;
  spent_txo_count: number;
  spent_txo_sum: number;
  tx_count: number;
}
export interface BitcoinAddressInfo {
  address: string;
  chain_stats: BitcoinAddressStats;
  mempool_stats: BitcoinAddressStats;
}
