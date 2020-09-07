const express = require("express");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./models");
const dotenv = require("dotenv");

const userRouter = require("./routes/user");


dotenv.config();
const app = express();

db.sequelize
	.sync()
	.then(() => {
		console.log("CHANLENDAR DATABASE IS COMPLETED RUNNING");
	})
	.catch(console.log.error);

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
	res.send("Backend server for Chanlendar");
});

// app.use("/topic")
app.use("/user", userRouter);
app.listen(3065, () => {
	console.log("CHANLENDAR BACKEND IS COMPLETED RUNNING");
});
