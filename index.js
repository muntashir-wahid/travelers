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

const getUsers = (req, res) => {
  console.log("Get all Users");
  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const getUser = (req, res) => {
  const { id } = req.params;
  console.log(`Get user: ID:${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const createUser = (req, res) => {
  const tour = req.body;
  console.log("Create user:", tour);

  res.status(201).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(`Update user: ID=${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log(`Delete tour: ID=${id}`);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

// Start the server
app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});

// Routes

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
