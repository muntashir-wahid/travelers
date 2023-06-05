require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});
