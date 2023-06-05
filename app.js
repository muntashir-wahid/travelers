const express = require("express");

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");

// Middleware
const app = express();
app.use(express.json());

// Route handlers

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
