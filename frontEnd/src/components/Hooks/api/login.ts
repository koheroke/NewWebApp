import { backendUrl } from "@H/web/env";
const url=`${backendUrl}/reqOtp`
export const reqOtp = async (mail:string)=> {
  const pass = await fetch(url, {
     method: "POST",
    headers: { "Content-Type": "string" },
    body: mail,
  });
  return pass
};
