import express, { Request, Response, NextFunction } from "express";
import { RegisterRoutes } from "./build/routes";

// create express application
const app = express();

// custom middleware
const logMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${req.method}] ${req.url}`);
  next(); // call next so the next middleware can run
};

const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
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
RegisterRoutes(app);

// start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
