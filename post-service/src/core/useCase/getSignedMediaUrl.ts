import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "../../frameworks/aws/s3Client";

class GetSignedMediaUrl {
    async find(bucketName: string, key: string) {
        const command = new GetObjectCommand({
            Bucket: bucketName,
            Key: key
        })
        const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
        return url;
    }
}

export default GetSignedMediaUrl;