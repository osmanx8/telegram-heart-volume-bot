export interface BotMsgResult {
  title: string;
  content: {
    text: string;
    callback_data: string;
  }[][];
}
