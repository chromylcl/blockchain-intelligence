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
export interface BitcoinTxOutput {
  scriptpubkey_address?: string;
  value: number;
}

export interface BitcoinTxInput {
  prevout: BitcoinTxOutput | null;
}

export interface BitcoinTxStatus {
  confirmed: boolean;
  block_height?: number;
  block_time?: number;
}

export interface BitcoinRawTransaction {
  txid: string;
  fee: number;
  vin: BitcoinTxInput[];
  vout: BitcoinTxOutput[];
  status: BitcoinTxStatus;
}
