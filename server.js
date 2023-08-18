const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
app.use(cors()); //allow cross origin requests from any domain to access this server

app.use(express.urlencoded({ extended: true })); //parse urlencoded data from request body
app.get("/notes", (req, res) => {
  res.send("notes");
});
app.listen(
    port,
    () => console.log(`Example app listening at http://localhost:${port}`)
)

