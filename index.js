const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello form the server side!", app: "Natours" });
});

app.listen(PORT, () => {
  console.log(`Natours app is running on prot ${PORT}`);
});
