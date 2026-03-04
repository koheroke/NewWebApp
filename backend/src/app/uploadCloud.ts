import type { Hono } from "hono";
import { Storage } from "@google-cloud/storage";
import env from "@/hooks/env"
const storage = new Storage({
  keyFilename: env.GOOGLE_APPLICATION_CREDENTIALS,
}); 
interface fileInfo{
  fileName:string,
  contentType:string
}
console.log("env"+env.GOOGLE_APPLICATION_CREDENTIALS)
console.log("storage"+storage)

const bucketName = env.GCS_BUCKET_NAME;
if (!bucketName) {
  throw new Error("GCS_BUCKET_NAME environment variable not set.");
}
const bucket = storage.bucket(bucketName);
export const uploadCloud = (app: Hono) => {
  app.post("/upload", async (c) => {
    const fileInfos = await c.req.json<{fileinfos:fileInfo[]}>()
    console.log("body"+fileInfos)
    
    const urls= fileInfos.fileinfos.map(async (fileInfo) => {
      const contentType = fileInfo.contentType || "application/octet-stream";
      const extension = fileInfo.fileName.split('.').pop() || 'png';
      const fileName = `chat-images/${Date.now()}.${extension}`;
      const file = bucket.file(fileName);
      const [url] = await file.getSignedUrl({
        version: "v4",
        action: "write",
        expires: Date.now() + 15 * 60 * 1000,
        contentType: contentType,
      });
      return {uploadUrl:url,fileUrl:`https://storage.googleapis.com/${bucketName}/${fileName}`}
    })
    return c.json({
      urls:await Promise.all(urls)
    });
});
}