var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { isValidDOB } from "../../frameworks/utils/date.utils";
class UserValidator {
    static validateUsername(username) {
        return UserValidator.usernameRegex.test(username);
    }
    static validateEmail(email) {
        return UserValidator.emailRegex.test(email);
    }
    static validateName(name) {
        return UserValidator.nameRegex.test(name);
    }
    static validatePassword(password) {
        return UserValidator.passwordRegex.test(password);
    }
    static validateDOB(dob) {
        return __awaiter(this, void 0, void 0, function* () {
            return isValidDOB(dob);
        });
    }
}
UserValidator.usernameRegex = /^[a-zA-Z0-9._]{3,}$/;
UserValidator.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
UserValidator.nameRegex = /^[a-zA-Z\s'-]+$/;
UserValidator.passwordRegex = /^(?=.*[A-Z])(?=.*[\d._@])[A-Za-z\d._@]{8,}$/;
export default UserValidator;
