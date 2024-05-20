var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserValidator from "../validators/user.validator";
import User from "../../core/entity/user.entity";
class UserController {
    constructor(createUser) {
        this.createUser = createUser;
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, name, password, email, dob } = req.body;
            const newUser = new User({ id: "", username, name, password, email, dob });
            if (!UserValidator.validateUsername(username)) {
                return res.status(400).json({ error: "Invalid username" });
            }
            if (!UserValidator.validateEmail(email)) {
                return res.status(400).json({ error: "Invalid email" });
            }
            if (!UserValidator.validateName(name)) {
                return res.status(400).json({ error: "Invalid name" });
            }
            if (!UserValidator.validatePassword(password)) {
                return res.status(400).json({
                    error: "Password should contain at least one uppercase, one symbol, and minimum 8 characters",
                });
            }
            const isValidDOB = yield UserValidator.validateDOB(dob);
            if (!isValidDOB) {
                return res.status(400).json({ error: "Invalid age" });
            }
            try {
                const createdUser = yield this.createUser.execute(newUser);
                return res.status(201).json(createdUser);
            }
            catch (error) {
                if (error.message === "User already exists") {
                    return res.status(409).json({ error: "User already exists" });
                }
                return res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
export default UserController;
