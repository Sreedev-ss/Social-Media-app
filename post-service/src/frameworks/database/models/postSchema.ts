import { Document, Model, Schema, default as mongoose } from "mongoose"
import { IPost } from "../../../core/entity/post.entity";
import { mediaSchema } from "./mediaSchema";

interface IPostDocument extends IPost, Document {
    id: string;
}

interface IPostModel extends Model<IPostDocument> { }

const postSchema = new Schema<IPostDocument>(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        mediaFiles: [mediaSchema],
    },
    {
        timestamps: true
    }
);

const PostModel:IPostModel = mongoose.model<IPostDocument,IPostModel>(
    "Post",
    postSchema
)

export {IPostModel,IPostDocument,PostModel}