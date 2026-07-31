import { Request, Response } from "express";
import { checkHealth } from "../services/health.service";

export const getHealth = (req: Request, res: Response): void => {
  const health = checkHealth();

  res.status(200).json(health);
};
