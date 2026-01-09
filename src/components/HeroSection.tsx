import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { DiscordLoginButton } from "./DiscordLoginButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Nowa wersja już dostępna
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Twój ulubiony
            <br />
            <span className="text-gradient">Discord Bot</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Automatyzuj swój serwer, baw się z przyjaciółmi i odkryj nowe
            możliwości dzięki naszemu potężnemu botowi Discord.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <DiscordLoginButton />
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#features"
              className="flex items-center gap-2 bg-secondary hover:bg-muted text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Zobacz funkcje
            </motion.a>
          </motion.div>

          {/* Bot preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16"
          >
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto glow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-foreground">
                      DiscordBot
                    </span>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                      BOT
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Dzisiaj o 12:34
                    </span>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-foreground font-medium mb-1">
                      🎉 Witaj na serwerze!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Użyj <code className="bg-muted px-1 rounded">/help</code>{" "}
                      aby zobaczyć listę dostępnych komend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
