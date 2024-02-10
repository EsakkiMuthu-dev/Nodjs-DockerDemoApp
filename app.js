const express = require("express");
// Configure port and static file serving directory
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.json('{ "Message" : "Docker is Easy"} '));
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
