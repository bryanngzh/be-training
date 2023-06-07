import { User, UserData, userData } from "./userData";

export default class UserService {
  getAllUsers = (): UserData => {
    console.log(userData);
    return userData;
  };

  getUser = (userId: string): User => {
    if (userData[userId]) {
      console.log(userId);
      console.log(userData[userId]);
      return userData[userId];
    } else {
      throw new Error("User not found");
    }
  };

  createUser = (req: User): User => {
    const userId = req.id;
    if (!userData[userId]) {
      userData[userId] = {
        id: userId,
        name: req.name,
        lastName: req.lastName,
        email: req.email,
      };
      console.log(userData[userId]);
      return userData[userId];
    } else {
      throw new Error("User already exists.");
    }
  };
}
