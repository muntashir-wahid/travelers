const express = require("express");

const PORT = 8000;

// Middleware
const app = express();
app.use(express.json());

// Route handlers

const getAllTours = (req, res) => {
  console.log("Get all Tours");
  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const getTour = (req, res) => {
  const { id } = req.params;
  console.log(`Get tour: ID:${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const createTour = (req, res) => {
  const tour = req.body;
  console.log("Create tour:", tour);

  res.status(201).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const updateTour = (req, res) => {
  const { id } = req.params;
  console.log(`Update  tour: ID=${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  console.log(`Delete tour: ID=${id}`);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

// Routes

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});
