import express = require("express");
import healthRouter from "./routes/health.routes";
import walletRouter from "./routes/wallet.routes";
const app = express();
app.use("/api/v1", healthRouter);
app.use("/api/v1/wallets", walletRouter);
app.get("/", (req, res) => {
  res.send("Blockchain Intelligence Platform API 🚀");
});

export default app;
