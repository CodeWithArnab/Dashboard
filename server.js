const express = require("express");
const cors = require("cors");
const data  = require("./data");

const app = express();
const port = process.env.PORT || 3001;
app.use(cors()); //allow cross origin requests from any domain to access this server

app.use(express.urlencoded({ extended: true })); //parse urlencoded data from request body
app.get("/data", (req, res) => {
  console.log(data);
  res.send(data);
});
app.listen(
    port,
    () => console.log(`Example app listening at http://localhost:${port}`)
)

