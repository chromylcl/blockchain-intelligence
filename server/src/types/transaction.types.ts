export interface Transaction {
  txid: string;
  amount: number;
  type: "received" | "sent";
  timestamp: number;
  fee: number;
}
