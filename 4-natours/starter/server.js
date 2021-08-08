const app = require('./app');

// Define a var to store the port to listen at
const port = 3000;
// Start the server/listening for requests
app.listen(port, () => {
  console.log(`app runs on port ${port}`);
});
