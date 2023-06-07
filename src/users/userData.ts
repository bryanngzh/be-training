export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
}

export interface UserData {
  [key: string]: User;
}

export const userData: UserData = {
  user1: {
    id: "user1",
    name: "Bryan",
    lastName: "Ng",
    email: "bryan_ng@millipede.sg",
  },
  user2: {
    id: "user2",
    name: "Sarah",
    lastName: "Dog",
    email: "sarah_dog@millipede.sg",
  },
};
