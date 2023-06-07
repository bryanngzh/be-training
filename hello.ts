import express, { Request, Response } from "express";

// Creating an express application
const app = express();
const port = 3000;

// Create routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
