const app = require("./app");

const PORT = 8000;

// Start the server
app.listen(PORT, () => {
  console.log(`Travelers app is running on prot ${PORT}`);
});
