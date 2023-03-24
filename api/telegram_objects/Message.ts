/**
 * Объект для отправки сообщений
 */

export interface IMessage {
    recipient_id: number
    html: string,
    reply_markup?: object | null
    disable_notification?: boolean
}