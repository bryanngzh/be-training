import { Request, Response } from "express";
import { userData } from "./userData";

export default class UserService {
  getAllUsers = (req: Request, res: Response): void => {
    res.send(userData);
    console.log(userData);
  };

  getUser = (req: Request, res: Response): void => {
    const userId = req.body.id;
    if (userData[userId]) {
      console.log(userId);
      res.send(userData[userId]);
      console.log(userData[userId]);
    } else {
      res.status(404).send("User not found");
    }
  };

  createUser = (req: Request, res: Response): void => {
    const userId = req.body.id;
    if (!userData[userId]) {
      userData[userId] = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      res.send(userData[userId]);
      console.log(userData[userId]);
    } else {
      res.status(404).send("User already registered");
    }
  };
}
