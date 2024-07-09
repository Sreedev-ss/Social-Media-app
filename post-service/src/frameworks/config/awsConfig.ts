import {  S3ClientConfig } from "@aws-sdk/client-s3";

const awsConfig: S3ClientConfig = {
    credentials:{
        accessKeyId: process.env.AWS_USER_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_USER_SECRET_KEY as string
    },
    region: process.env.BUCKET_REGION as string
}

export default awsConfig;