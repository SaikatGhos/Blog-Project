import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import nodemon from "nodemon";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// app.use((req, res) => {
//   res.status(404).json({
//     error: "Url Not Found",
//   });
// });

mongoose.connect(
  "mongodb://localhost:27017/myBlogProject",
  {
    useNewURLParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

var Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Information = new mongoose.model("Information", postSchema);

// app.get("/", (req, res) => {
//   res.send("My API");
// });
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Sucessfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registerd" });
    }
  });
});
app.post("/register", (req, res) => {
  //res.send("My API register");
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already Exist" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfully Registerd.Please Login!" });
        }
      });
    }
  });
});

app.post("/write", (req, res) => {
  const { title, description } = req.body;
  const information = new Information({
    title,
    description,
  });
  information.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Post Sucessfully Posted" });
    }
  });
});

app.get("/post", (req, res) => {
  Information.find()
    .then((result) => {
      res.status(200).json({
        postData: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3002, () => {
  console.log("BE started at port 3002");
});
