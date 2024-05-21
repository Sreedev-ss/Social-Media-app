export interface IUser {
  id?: string;
  username: string;
  name: string;
  email: string;
  password: string;
  dob: string;
}

class User implements IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  dob: string;

  constructor({ id, username, name, email, password, dob }: IUser) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.dob = dob;
  }
}

export default User;
