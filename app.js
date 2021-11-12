const express = require("express");
const CORS = require("cors");

const app = express();

const dataRoutes = require("./routes/data");

app.use(CORS());
app.use(dataRoutes);
app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up at Port No. 3001`);
});
