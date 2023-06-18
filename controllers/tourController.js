const Tour = require("./../models/tourModel");

exports.getAllTours = (req, res) => {
  console.log("Get all Tours");
  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.getTour = (req, res) => {
  const { id } = req.params;
  console.log(`Get tour: ID:${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.createTour = async (req, res) => {
  const tour = await Tour.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  const { id } = req.params;
  console.log(`Update  tour: ID=${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.deleteTour = (req, res) => {
  const { id } = req.params;
  console.log(`Delete tour: ID=${id}`);

  res.status(204).json({
    status: "success",
    data: null,
  });
};
