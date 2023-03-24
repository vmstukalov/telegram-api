# Telegram API

## Подготовка

Устновите глобально TypeScript и Nodemon.

```
npm install -g typescript
npm install -g nodemon
```

Создайте новый бот через https://t.me/BotFather

Добавьте в папку /api файл ".env". В него добавьте токен от вашего бота, который вы получили от https://t.me/BotFather

Пример:


TELEGRAM_BOT_TOKEN=bot1234567:f3uyceifnoqwfuqwfnqrf6

В личном Telegram зайдите в вашего бота и нажмите Start

Зайдите https://t.me/userinfobot, нажмите Start и узнайте свой id в телеграме. Он потребуется для запросов.

## Запуск

1. Через терминал зайдите в папку /api и выполните команды 

```
npm i 
npm run dev
```

2. Откройте адрес http://localtost:9001. Вы должны увидеть {ok: true}

3. Через Postman или другой клиент сделайте POST запрос http://localtost:9001/telegram/sendMessage с телом запроса 

```
{
    "recipient_id": id полученное от @userinfobot,
    "html": "Привет <b>Как дела</b>?"
}
```

В ваш бот должно поступить сообщение.