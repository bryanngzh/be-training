import express, { Request, Response, NextFunction } from "express";
import UserController from "./users123/userController";

// create express application
const app = express();

// import routers
const userController = new UserController();
const userRouter = userController.routes();

// custom middleware
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${req.method}] ${req.url}`);
  next(); // call next so the next middleware can run
};

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
};

// middleware
// Mainly for POST requests
app.use(express.json()); // Parse JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(logMiddleware);
app.use(errorMiddleware);

// routes
app.use("/users", userRouter);

// start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
