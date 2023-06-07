import UserService from "./userService";

import { User, UserData } from "./userData";
import { Get, Post, Path, Route, Body } from "tsoa";

@Route("users")
export class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  @Get("/")
  public async getAllUsers(): Promise<UserData> {
    return this.service.getAllUsers();
  }

  @Get("{userId}")
  public async getUser(@Path() userId: string): Promise<User> {
    return this.service.getUser(userId);
  }

  @Post("/create")
  public async createUser(@Body() requestBody: User): Promise<User> {
    console.log(requestBody);
    return this.service.createUser(requestBody);
  }
}
