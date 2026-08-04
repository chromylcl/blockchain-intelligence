import { Request, Response } from "express";
import { analyzeWallet } from "../services/wallet.service";

export const getWallet = async (req: Request, res: Response): Promise<void> => {
  const address = req.params.address;
  const result = await analyzeWallet(address);

  res.status(200).json(result);
};
