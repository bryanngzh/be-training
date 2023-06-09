import express from "express";
import jwt from "jsonwebtoken";

export function expressAuthentication(
  req: express.Request,
  _securityName: string,
  _scopes: string[]
): Promise<any> {
  const secretKey = "321321";
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  // const token = req.headers.Authorization;

  if (!token) {
    return Promise.reject(new Error("no token!"));
  } else {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      return Promise.resolve(decodedToken);
    } catch (error) {
      return Promise.reject(new Error("Invalid token"));
    }
  }
}
