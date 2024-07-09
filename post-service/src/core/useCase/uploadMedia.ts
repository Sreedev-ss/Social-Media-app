import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../../frameworks/aws/s3Client";

class UploadMedia{
    async execute(bucketName:string,key:string, body:Buffer, contentType: any){
        const command = new PutObjectCommand({
            Bucket:bucketName,
            Key:key,
            Body:body,
            ContentType:contentType
        })

        try {
            const response = await s3Client.send(command)
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default UploadMedia;