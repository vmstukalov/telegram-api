import axios from "axios";


/**
 * https://core.telegram.org/bots/api#sendmessage
 * @chat_id id получателя в Telegram
 * @html текст сообщения, можно в формате html
 * @reply_markup клавиатура под сообщением, может быть null
 * */

export async function sendTelegramMessage(chat_id, html, reply_markup) {

    const token = process.env.TELEGRAM_BOT_TOKEN
    const url = "https://api.telegram.org/bot" + token + "/sendMessage"
    let result

    const data = {
        text: html.replace(/\\n/g, "\n"),
        chat_id: chat_id,
        disable_web_page_preview: true,
        parse_mode: 'html',
    }

    if (reply_markup) {
        data['reply_markup'] = reply_markup
    }

    try {
        await axios.post(url, data, {
            headers: {'Content-type': 'application/json'}
        })
        result = {ok: true}
    } catch (e) {
        console.error(e.response.data)

        result = {ok: false}
    }
    return result
}

/**
 * https://core.telegram.org/bots/api#sendphoto
 * */

export async function sendTelegramPhoto() {

    console.log("Send Photo")

}
