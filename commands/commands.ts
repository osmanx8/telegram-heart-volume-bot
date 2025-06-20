import {
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL,
  Connection,
  Transaction,
  ComputeBudgetProgram,
  SystemProgram,
} from "@solana/web3.js";
import { sendAndConfirmTransaction } from "@solana/web3.js";
import { getMint } from "@solana/spl-token";

export const start = async (chatId: number, username?: string) => {
  const title = `🤖 Welcome to HeartBot AI! 🔍

Get real-time alerts for brand new Pump.fun token launches 🚀

🎯 Set custom filters to track:
💰 Market Cap
💧 Liquidity
👨‍💻 Dev Holdings
📈 Volume
…and much more!

⚙️ Coming soon:

🛒 Auto-buy & sell sniper tools
🎯 Manual trading options

Tap the buttons below to set your filters and begin scanning!
`;
  const content = [
    [{ text: "📊View Filtered Tokens", callback_data: "view-filter-token" }],
    [{ text: "🛠️Filtering Triggers", callback_data: "filtering-triggers" }],
    [{ text: "💰Filter by Value", callback_data: "filter-by-value" }],
    [
      { text: "🔍 Search for Token", callback_data: "search-for-token" },
      { text: "🪙 Create Token(Coming Soon)", callback_data: "create-token" },
    ],
    [
      { text: "👤 View My Info", callback_data: "view-my-info" },
      { text: "⚙️ Bot Settings", callback_data: "bot-settings" },
    ],
    // [{ text: '🔧 Custom Option', callback_data: 'custom-setting-page' }],
    [{ text: "🏦Set Treasury Wallet", callback_data: "set-treasury-wallet" }],
  ];
  console.log("HERE========>");
  return { title, content };
};

export const searchForToken = async (chatId: number, username?: string) => {
  const title = `
    🔍 Choose what to search by:
  `;
  const content = [
    [
      { text: "📝Name", callback_data: "token-name" },
      { text: "⏬Symbol", callback_data: "token-symbol" },
    ],
    [{ text: "🧾Contract Address", callback_data: "contract-address" }],
  ];
  return { title, content };
};

export const enterNameToSearch = async (chatId: number, username?: string) => {
  const title = `
    🔍 Enter name to search:
  `;
  const content = [[]];
  return { title, content };
};
