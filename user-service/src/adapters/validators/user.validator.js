const { isValidDOB } = require("../../frameworks/utils/date.utils");

class UserValidator {
  static validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9._]{3,}$/;
    return usernameRegex.test(username);
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateName(name) {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(name);
  }

  static validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\d._@])[A-Za-z\d._@]{8,}$/;
    return passwordRegex.test(password);
  }

  static async validateDOB(dob) {
    return isValidDOB(dob);
  }
}

module.exports = UserValidator;