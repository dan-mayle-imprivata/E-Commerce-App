const express = require("express");
// middleware
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");

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

// async needed when await keyword used.
app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email: email });

  if (existingUser) {
    return res.send("Email in use");
  }

  if (password !== passwordConfirmation) {
    return res.send("Passwords must match");
  }
  res.send("Account created!!!");
});
app.listen(3000, () => {
  console.log("Listening");
});
