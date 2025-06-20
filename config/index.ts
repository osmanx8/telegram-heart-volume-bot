import dotenv from "dotenv";
import { retrieveEnvVariable } from "../utils";

dotenv.config();

export const BOT_TOKEN = retrieveEnvVariable("BOT_TOKEN");
export const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT");
export const RPC_WEBSOCKET_ENDPOINT = retrieveEnvVariable(
  "RPC_WEBSOCKET_ENDPOINT"
);
