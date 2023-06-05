const express = require("express");

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Route handlers

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
