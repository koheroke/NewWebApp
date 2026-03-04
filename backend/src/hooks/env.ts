import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });
const envs = {
  GOOGLE_APPLICATION_CREDENTIALS : process.env.GOOGLE_APPLICATION_CREDENTIALS,
  GCS_BUCKET_NAME : process.env.GCS_BUCKET_NAME,
};
export default envs;

