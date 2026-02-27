import { reactive } from 'vue';
export interface postimage{
  id:string
  data:File
}
export interface previewimage{
  id:string
  data:string
}
class ImageHook{
  public images = reactive<postimage[]>([]);
  public previewImages = reactive<previewimage[]>([]);
  public maxSize: number = 5 * 1024 * 1024;
  public imageSize: number = 200;

  public async add(image: postimage): Promise<boolean> {
    const totalSize = this.images.reduce((sum, img) => sum + img.data.size, 0) + image.data.size;
    if (totalSize > this.maxSize)return false;
    try {
      const previewUrl = await this.createPreviewImage(image.data);
      if (previewUrl) {
        this.images.push(image);
        this.previewImages.push({data:previewUrl,id:image.id});
        return true;
      }
    } catch (error) {
        console.error("プレビュー生成に失敗しました:", error);
        return false
    }
  return true;
  }
  public removePreviewImageURL(id: string) {
  const index = this.previewImages.findIndex((image) => image.id === id);
  if (index !== -1) {
    const deletepreview=this.previewImages[index];
    if(deletepreview==undefined)return false
    URL.revokeObjectURL(deletepreview.data);
    this.previewImages.splice(index, 1);
    this.images.splice(index, 1);
  }
}
  public createPreviewImage(image:File): Promise<string | null>{
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (event:any) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx)return null;
        const minSize = Math.min(img.width, img.height);
        const sx = (img.width - minSize) / 2;
        const sy = (img.height - minSize) / 2;
        canvas.width = this.imageSize;
        canvas.height = this.imageSize;
        ctx.drawImage(img, sx, sy, minSize, minSize, 0, 0, this.imageSize, this.imageSize);
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(URL.createObjectURL(blob));
          } else {
            reject(new Error("Blob作成に失敗しました"));
          }
        }, image.type);
      };
      img.onerror = reject;
    };
  });
}}
export const imageHook=new ImageHook()



