const express = require("express");
const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const demoData = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  batters: {
    batter: [
      { id: "1001", type: "Regular" },
      { id: "1002", type: "Chocolate" },
      { id: "1003", type: "Blueberry" },
      { id: "1004", type: "Devil's Food" },
    ],
  },
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};

app.get("/demo", (req, res) => {
  res.json(demoData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
