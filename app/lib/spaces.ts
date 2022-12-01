import {
  S3,
  PutObjectCommand,
  DeleteObjectCommand,
  CopyObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3({
  forcePathStyle: false,
  endpoint: "https://sfo3.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET,
  },
});

export const BUCKET_NAME = "project-ai";

export const bucketParams = {
  Bucket: "project-ai",
  Key: "example.txt",
  Body: "content",
};

export async function deleteFile(path: string) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
  });

  console.log("DELETE", path);
  try {
    const data = await s3Client.send(command);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadFile(
  path: string,
  content: ArrayBuffer,
  type: string = "image/png"
): Promise<void> {
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: path,
    Body: Buffer.from(content),
    ACL: "public-read",
    ContentType: type,
  });

  try {
    await s3Client.send(command);
  } catch (err) {
    console.log("Error", err);
  }
}

export async function moveFile(from: string, to: string) {
  const command = new CopyObjectCommand({
    Bucket: BUCKET_NAME,
    ACL: "public-read",
    Key: to,
    CopySource: `${BUCKET_NAME}/${from}`,
  });

  try {
    await s3Client.send(command);
  } catch (err) {
    console.log("Error", err);
  }
}

export { s3Client };
