class CreateUser {
    private userRepository: any;

    constructor(userRepository: any) {
        this.userRepository = userRepository;
    }

    async execute(user: any): Promise<object> {
        const data = this.userRepository.save(user);
        return data;
    }
}

export default CreateUser;