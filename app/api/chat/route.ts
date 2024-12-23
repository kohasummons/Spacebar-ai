import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mode } from "viem/chains";
import { http } from "viem";
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { MODE, USDC, erc20 } from "@goat-sdk/plugin-erc20";
import { sendETH } from "@goat-sdk/wallet-evm";
import { viem } from "@goat-sdk/wallet-viem";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Get keys from headers
    const walletKey = req.headers.get("X-Wallet-Key");

    if (!walletKey) throw new Error("Wallet key is required");

    // Setup wallet client
    const account = privateKeyToAccount(walletKey as `0x${string}`);
    const walletClient = createWalletClient({
      account,
      transport: http(process.env.RPC_PROVIDER_URL),
      chain: mode,
    });

    // Setup tools
    const tools = await getOnChainTools({
      wallet: viem(walletClient),
      plugins: [sendETH(), erc20({ tokens: [USDC, MODE] })],
    });

    // Create a stream
    const result = await streamText({
        model: openai("gpt-4o-mini"),
        tools,
        prompt: lastMessage.content,
    });

    // Return a streaming response
    return result.toDataStreamResponse();
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}