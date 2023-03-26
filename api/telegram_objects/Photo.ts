/**
 * Объект для отправки фото
 */

export interface IMessageWithPhoto {
    recipient_id: number;
    photo_url: string;
    caption?: string;
    reply_markup?: object | null;
    disable_notification?: boolean;
}

