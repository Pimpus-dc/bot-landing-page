import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import { DiscordLoginButton } from "./DiscordLoginButton";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto glow"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-8">
            <Bot className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Gotowy na <span className="text-gradient">lepszy serwer</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Dołącz do tysięcy serwerów, które już korzystają z naszego bota.
            Konfiguracja zajmuje mniej niż minutę!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <DiscordLoginButton />
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#pricing"
              className="flex items-center gap-2 bg-secondary hover:bg-muted text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Zobacz cennik
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
