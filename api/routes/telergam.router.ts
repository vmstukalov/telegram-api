import express from 'express';
import {sendTelegramMessage, sendTelegramPhoto} from "../services/telegram.service";
import {IMessage} from "../telegram_objects/Message";

const telegramRouter = express.Router()

/**
 * Отправляет сообщение от имени Telegram бота
 * в тело запроса (req.body) нужно передать JSON объект IMessage: {recipient_id: id получателя, text: текст сообщения},
 */

telegramRouter.post('/sendMessage', async (req, res) => {

    const message_data: IMessage = req.body

    const reply_markup = {
        inline_keyboard: [[
            {text: "Текст кнопки", url: "https://google.com"},
            {text: "Еще кнопка", url: "https://github.com"}],
        ]
    }

    await sendTelegramMessage(message_data.recipient_id, message_data.html, null)

    await sendTelegramMessage(message_data.recipient_id, message_data.html, reply_markup)

    res.json({ok: true})

})

telegramRouter.post('/sendPhoto', async (req, res) => {

    await sendTelegramPhoto();

    res.json({ok: true})
})

export default telegramRouter