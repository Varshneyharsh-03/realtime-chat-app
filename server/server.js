const express = require("express");
const { PORT, JWT_SECRET } = require("./config/secrets");

const app = express();

app.use(express.json());

app.listen(PORT || 4000, () => {
  console.log(`Sever started at port number ${PORT}`);
});
