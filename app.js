// app.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
// const commentsRoutes = require("./routes/comments");
const challengesRoutes = require("./routes/challenges");
// const likesRoutes = require("./routes/likes")
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/challenges", challengesRoutes);
// app.use("/comments", commentsRoutes);
// app.use("/likes", likesRoutes);

module.exports = app;
