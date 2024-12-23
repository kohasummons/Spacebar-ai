"use client";

import { Wallet } from "@/app/(preview)/actions";
import { LockIcon } from "./icons";
import { motion } from "framer-motion";


export const WalletView = ({ wallet }: { wallet: Wallet }) => {


  return (
    <div className="flex flex-row gap-2 md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full pb-6">
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md flex flex-row gap-3 items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-2 bg-green-600 text-green-100 dark:bg-green-200 dark:text-green-900 rounded-md">
          <LockIcon />
        </div>
        <div>
          <div className="text-xs">Wallet Balance</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {wallet.balance}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
