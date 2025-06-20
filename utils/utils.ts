import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import dotenv from "dotenv";
import fs from "fs";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

export const retrieveEnvVariable = (variableName: string) => {
  const variable = process.env[variableName] || "";
  if (!variable) {
    console.log(`${variableName} is not set`);
    process.exit(1);
  }
  return variable;
};
import { BotMsgResult } from "./types";

export const sendMessage = async (
  bot: TelegramBot,
  result: BotMsgResult,
  msgId: number,
  chatId: number
) => {
  try {
    console.log("HERE====>", result);
    // await bot.deleteMessage(chatId, msgId)
    await bot.sendMessage(chatId, result.title, {
      reply_markup: {
        inline_keyboard: result.content,
        force_reply: false, // Disable input field
      },
      parse_mode: "HTML",
    });
  } catch (error) {
    console.log("Error happened while dealing with message");
  }
};

export const sleep = async (ms: number) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};
