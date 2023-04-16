// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config({ path: ".env" });
// }

const express = require("express");
const app = express();
const url =
  "mongodb+srv://user:5TvLUImh8JtcYG5G@cluster0.b5wat.mongodb.net/getesolution?retryWrites=true&w=majority";

require("./startups/routes")(app);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));

// app.use(express.urlencoded({ limit: "10mb", extended: false }));

// const mongoose = require("mongoose");
// mongoose.connect(url, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to mongoose"));

// app.post("/sign_up", function (req, res) {
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;
//   var date = new Date();
//   var data = {
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//     date: date,
//   };
//   db.collection("details").insertOne(data, function (err, collection) {
//     if (err) throw err;
//     console.log("Record inserted Successfully");
//   });

//   return res.send("Your message has been sent. Thank you!");
// });

// app.use('/', indexRouter)
const port = 3001
app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
