const express = require("express");
const path = require("path");

const app = express();

app.get("/admin", (request, response) => response.send("Api is running..."));

// Server Static Asstes In Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
