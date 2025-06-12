import { newUserID, newUserName, UserID, UserName } from "./value.objects";

export type User = {
  id: UserID;
  name: UserName;
  imageUrl: string;
  department: string;
};

export const newUser = (
  id: string,
  name: string,
  imageUrl: string,
  department: string
): User | Error => {
  const userID = newUserID(id);
  if (userID instanceof Error) {
    return userID;
  }
  const userName = newUserName(name);
  if (userName instanceof Error) {
    return userName;
  }
  return {
    id: userID,
    name: userName,
    imageUrl,
    department,
  };
};
