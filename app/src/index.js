import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("🔥 Deployed via GitOps + ArgoCD");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});