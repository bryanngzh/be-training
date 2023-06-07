import express from "express";
import UserService from "./userService";

const router = express.Router();

export default class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  routes() {
    router.get("/", this.service.getAllUsers.bind(this.service));
    router.get("/user", this.service.getUser.bind(this.service));
    router.post("/create", this.service.createUser.bind(this.service));

    return router;
  }
}
