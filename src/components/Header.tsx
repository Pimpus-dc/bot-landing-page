import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { DiscordLoginButton } from "./DiscordLoginButton";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">DiscordBot</span>
        </div>
        <DiscordLoginButton />
      </div>
    </motion.header>
  );
};
