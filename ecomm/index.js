const express = require("express");
// middleware
const bodyParser = require("body-parser");

const app = express();

// Every route handler has middleware applied
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
  <div>
    <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <input name="passwordconfirmation" placeholder="password confirmation"/>
        <button>Sign Up</button>
    </form>
 </div>
  `);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Account created!!!");
});
app.listen(3000, () => {
  console.log("Listening");
});
