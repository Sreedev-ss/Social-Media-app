export interface IMedia {
    imageName:string;
    type:'image' | 'video' | 'other';
    metadata : Record<string,string>
}

export interface IPost {
    id?: string;
    content?: string;
    userId?: string;
    mediaFiles?: IMedia[];
}

class Post implements IPost {
    id:string;
    content: string;
    userId: string;
    mediaFiles: IMedia[];

    constructor({id, content, userId, mediaFiles}:IPost){
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.mediaFiles = mediaFiles;
    }
}

export default Post;