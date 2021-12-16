const express = require("express");
const cors = require("cors");

const hotdogsRoutes = require("./routes/index");

const PORT = process.env.PORT || 2222;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", hotdogsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Server error";
  res.status(status).json({ message });
});

app.listen(PORT, console.log(`Server run on port ${PORT}`));
