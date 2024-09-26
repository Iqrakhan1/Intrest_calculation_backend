const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get("/Interest", (req, res) => {
  const principle = parseInt(req.query.principle);
  const time = parseInt(req.query.time);
  const rate = parseInt(req.query.rate);
  const simpleIntrest = (principle * rate * time) / 100;
  const total = principle + simpleIntrest;

  res.send({
    total: total,
    simpleIntrest: simpleIntrest,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
