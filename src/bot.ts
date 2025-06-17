import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.start((ctx) => ctx.reply('Привіт! Я твій бот.'));
bot.help((ctx) => ctx.reply('Напиши щось, i я повторю його.'));
bot.on('text', (ctx) => ctx.reply(`Ти написав: ${ctx.message.text}`));

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
