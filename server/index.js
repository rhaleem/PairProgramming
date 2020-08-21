const express = require("express");
const index = express();
const apiRoutes = require("./Routes/apiRoutes.js");
const cors = require("cors");

index.use(cors());
index.use(express.json());
index.use("/", apiRoutes);

index.listen(5000, console.log("server running at http://localhost:5000"));
