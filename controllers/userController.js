exports.getAllUsers = (req, res) => {
  console.log("Get all Users");
  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.getUser = (req, res) => {
  const { id } = req.params;
  console.log(`Get user: ID:${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.createUser = (req, res) => {
  const tour = req.body;
  console.log("Create user:", tour);

  res.status(201).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  console.log(`Update user: ID=${id}`);

  res.status(200).json({
    status: "success",
    data: {
      message: "Waiting for the database connection",
    },
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  console.log(`Delete tour: ID=${id}`);

  res.status(204).json({
    status: "success",
    data: null,
  });
};
