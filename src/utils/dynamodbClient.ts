import { DynamoDB } from "aws-sdk";

const options = {
    accessKeyId: "x",
    secretAccessKey: "x",
    regions: "localhost",
    endpoint: "http://localhost:8000/shell",
    s3ForcePathStyle: true
}

const isOffline = () => {
    return process.env.IS_OFFLINE;
}

export const document = isOffline() ? new DynamoDB.DocumentClient(options) : new DynamoDB.DocumentClient();
