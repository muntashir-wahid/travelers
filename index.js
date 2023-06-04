const express = require("express");

const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello form the server side!", app: "Natours" });
});

app.get("/api/v1/tours", (req, res) => {
  console.log("Get all Tours");
  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  const { id } = req.params;
  console.log(`Get tour: ID:${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  const tour = req.body;
  console.log("Create tour:", tour);

  res.status(201).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  const { id } = req.params;
  console.log(`Update  tour: ID=${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
});

app.delete("/api/v1/tours/:id", (req, res) => {
  const { id } = req.params;
  console.log(`Delete tour: ID=${id}`);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});
