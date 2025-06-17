import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

export function startBot(token: string) {
    dotenv.config();
    const bot = new Telegraf(token!);

    bot.start((ctx) => ctx.reply('Привіт! Я твій бот.'));
    bot.help((ctx) => ctx.reply('Напиши щось, i я повторю його.'));

    bot.launch().then(_ => console.log('test'))

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
