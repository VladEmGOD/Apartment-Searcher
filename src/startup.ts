import dotenv from 'dotenv';
import {startBot} from 'modules/bot';

dotenv.config();

startBot(process.env.BOT_TOKEN!);
