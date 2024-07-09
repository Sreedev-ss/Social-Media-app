import { Document, Model, Schema, model } from 'mongoose';
import { IMedia } from '../../../core/entity/post.entity';

interface IMediaDocument extends IMedia, Document { }

interface IMediaModel extends Model<IMediaDocument> { }

const mediaSchema = new Schema<IMediaDocument>(
    {
        imageName: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['image', 'video', 'other'],
            required: true,
        },
        metadata: {
            type: Map,
            of: String,
        },
    },
    { _id: false }
);

const MediaModel = model<IMediaDocument, IMediaModel>('Media', mediaSchema);

export { mediaSchema, MediaModel };