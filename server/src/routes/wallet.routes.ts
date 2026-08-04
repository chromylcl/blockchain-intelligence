import { Router } from "express";
import { getWallet } from "../controllers/wallet.controller";
const router = Router();
router.get("/:address", getWallet);
export default router;
