export interface messageInterface {
  roomId: string
  content: string
  type: "text" | "image" | "file"
  clientMessageId: string
  createdAt: number
}

export type postBox = Omit<messageInterface, 'roomId'>;