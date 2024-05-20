import { isValidDOB } from "../../frameworks/utils/date.utils";

class UserValidator {
  private static usernameRegex: RegExp = /^[a-zA-Z0-9._]{3,}$/;
  private static emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private static nameRegex: RegExp = /^[a-zA-Z\s'-]+$/;
  private static passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[\d._@])[A-Za-z\d._@]{8,}$/;

  static validateUsername(username: string): boolean {
    return UserValidator.usernameRegex.test(username);
  }

  static validateEmail(email: string): boolean {
    return UserValidator.emailRegex.test(email);
  }

  static validateName(name: string): boolean {
    return UserValidator.nameRegex.test(name);
  }

  static validatePassword(password: string): boolean {
    return UserValidator.passwordRegex.test(password);
  }

  static async validateDOB(dob: string): Promise<boolean> {
    return isValidDOB(dob);
  }
}

export default UserValidator;