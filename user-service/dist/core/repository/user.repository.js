var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserRepository {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.UserModel.findOne({ username });
            return user;
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = yield this.UserModel.create(user);
            return createdUser;
        });
    }
}
export default UserRepository;
