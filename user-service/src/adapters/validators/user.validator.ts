import { isValidDOB } from "../../frameworks/utils/date.utils";

class UserValidator {
  private static usernameRegex: RegExp = /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/;
  private static emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static nameRegex: RegExp = /^[a-zA-Z]{3,}$/;
  private static passwordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*[\d._@])[A-Za-z\d._@]{8,}$/;

  static validateUsername(username : string): boolean {
    return UserValidator.usernameRegex.test(username);
  }

  static validateEmail(email: string): boolean {
    return UserValidator.emailRegex.test(email?.trim());
  }

  static validateName(name: string): boolean {
    return UserValidator.nameRegex.test(name?.trim());
  }

  static validatePassword(password: string): boolean {
    return UserValidator.passwordRegex.test(password?.trim());
  }

  static async validateDOB(dob: string): Promise<boolean> {
    return isValidDOB(dob);
  }
}

export default UserValidator;
