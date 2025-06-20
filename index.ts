import TelegramBot, { CallbackQuery } from "node-telegram-bot-api";
import * as commands from "./commands";
import { Connection } from "@solana/web3.js";
import { BotMsgResult, sendMessage, sleep } from "./utils";
import { BOT_TOKEN, RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT } from "./config";

const bot = new TelegramBot(BOT_TOKEN!, { polling: true });
let botName: string;

export const solanaConnection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
  commitment: "confirmed",
});
console.log("Bot started");

bot.setMyCommands(commands.commandList);

//text
bot.on("message", async (msg) => {
  console.log("HERE==>");
  const chatId = msg.chat.id!;
  const text = msg.text!;
  const msgId = msg.message_id!;
  const username = msg.from!.username!;
  if (text) console.log(`message : ${chatId} -> ${text}`);
  else return;

  try {
    let result: BotMsgResult;
    switch (text) {
      case `/start`:
        result = await commands.start(chatId, username);
        sendMessage(bot, result, msgId, chatId);
        break;

      // case `/stop`:
      //     result = await commands.stopBot(chatId, username)
      //     sendMessage(bot, result, msgId, chatId)
      //     break;

      default:
        await bot.deleteMessage(chatId, msgId);
    }
  } catch (e) {
    console.log("error -> \n", e);
  }
});

//query(button)

bot.on("callback_query", async (query: CallbackQuery) => {
  const chatId = query.message?.chat.id!;
  const msgId = query.message?.message_id!;
  const action = query.data!;
  const username = query.message?.chat?.username!;
  const callbackQueryId = query.id;

  console.log(`query : ${chatId} -> ${action}`);
  try {
    let result;
    let result1;
    switch (action) {
      case "search-for-token":
        result = await commands.searchForToken(chatId, username);
        sendMessage(bot, result, msgId, chatId);
        await sleep(500);
        result1 = await commands.enterNameToSearch(chatId, username);
        sendMessage(bot, result1, msgId, chatId);
        break;
    }
  } catch (e) {
    console.log("error->\n", e);
  }
});
