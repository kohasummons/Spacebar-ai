"use client";

import { motion } from "framer-motion";
import { Kim, Printer, Mode, Supswap } from "./icons/index";

const protocols = [
  { name: "Kim", icon: <Kim className="w-10 h-10" /> },
  { name: "Printer", icon: <Printer className="w-10 h-10" /> },
  { name: "Mode", icon: <Mode className="w-10 h-10" /> },
  { name: "Supswap", icon: <Supswap className="w-10 h-10" /> },
];

export const TrendingProtocols = () => {
  return (
    <div className="flex flex-col gap-2 md:max-w-[452px] max-w-[calc(100dvw-80px)] w-full pb-6">
      {protocols.map((protocol) => (
        <motion.div
          className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md flex flex-row gap-3 items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          key={protocol.name}
        >
          <div className="p-2 text-green-100 dark:bg-green-200 dark:text-green-900 rounded-md">
            {protocol.icon}
          </div>
          <div className="flex justify-between w-full pr-2">
            <div className="text-xs">{protocol.name}</div>
            <div className="text-xs text-zinc-300 dark:text-zinc-400">
              {Math.floor(Math.random() * 100)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
