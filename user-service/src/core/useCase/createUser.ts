class CreateUser {
    private userRepository: any;

    constructor(userRepository: any) {
        this.userRepository = userRepository;
    }

    async execute(user: any): Promise<any> {
        const existingUser = await this.userRepository.findByUsername(user.username);
        if (existingUser) {
            throw new Error("User already exists");
        }

        return this.userRepository.save(user);
    }
}

export default CreateUser;