import bcrypt from 'bcryptjs';

class EncryptionService {
  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async comparePasswords(password: string, hashedPassword: string) {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  }
}

export { EncryptionService };