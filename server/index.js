const express = require("express");
const itemRoutes = require("./routes/items-routes");

const app = express();

app.use("/api/items", itemRoutes);
app.listen(4000, () => console.log("Server is running at 4000"));
