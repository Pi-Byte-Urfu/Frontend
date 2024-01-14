export interface IMessage {
  senderId: number
  receiverId?: number
  messageId?: number
  messageText: string
  isRead: boolean
  createdAt: number
}