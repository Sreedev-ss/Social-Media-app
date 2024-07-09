export interface IPost {
    id?: string;
    content?: string;
    userId?: string;
    imageName?:string
}

class Post implements IPost {
    id:string;
    content: string;
    userId: string;
    imageName:string

    constructor({id, content, userId,imageName}:IPost){
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.imageName = imageName;
    }
}

export default Post;