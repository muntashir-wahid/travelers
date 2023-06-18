const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// Create MongoDb Connection string
const connectionString = process.env.DB_CONNECTION_STRING.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

const PORT = process.env.PORT || 5000;

// Connect to the Database

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database successfully connected."))
  .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});
