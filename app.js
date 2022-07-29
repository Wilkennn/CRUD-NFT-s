import express from "express";

import loginRoute from "./routes/login.js";
import registerRoute from "./routes/register.js";
import mainRoute from "./routes/main.js";
import editRoute from "./routes/edit.js";

const port = 10000;
const app = express();

//Setting

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

//Get
app.get("/", loginRoute);
app.get("/register", registerRoute);
app.get("/main", mainRoute);
app.get("/edit/:nft", editRoute);

//Post
app.post("/main", mainRoute);

//PUT
app.put("/main",mainRoute)

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
