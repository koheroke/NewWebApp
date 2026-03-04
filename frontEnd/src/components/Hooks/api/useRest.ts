import { backendUrl } from "@H/web/env";
interface fileInfo{
  fileName:string,
  contentType:string
}
interface urls{
  uploadUrl:string,
  fileUrl:string
}
export const uploadImage = async (files: File[])=> {
  const fileinfos:fileInfo[] = files.map(file => ({
    fileName: file.name,
    contentType: file.type
  }));
  const res = await fetch(backendUrl + "/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fileinfos: fileinfos
    }),
  });
  const urls:urls[] = (await res.json()).urls;
  await Promise.all(urls.map((url, index) => {
    if (!files[index]) return;
      return fetch(url.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": files[index].type },
        body: files[index],
      });
    }
  ));
  return urls.map((url:urls)=>{
    return url.fileUrl
  });
};
