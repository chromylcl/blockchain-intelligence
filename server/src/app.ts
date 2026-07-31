import express = require("express");
import healthRouter from "./routes/health.routes";
const app = express();
app.use(healthRouter);
app.get("/", (req, res) => {
  res.send("Blockchain Intelligence Platform API 🚀");
});

export default app;
