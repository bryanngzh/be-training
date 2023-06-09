import jwt from "jsonwebtoken";
import { Body, Route, Post } from "tsoa";

@Route("auth")
export class AuthController {
  public async generateToken(userId: string): Promise<string> {
    const secretKey = "321321";
    const token = jwt.sign({ userId }, secretKey);
    return token;
  }

  @Post("login")
  public async login(@Body() user: { userId: string }): Promise<string> {
    console.log(user);
    console.log("random");
    const token = this.generateToken(user.userId);
    return token;
  }
}
