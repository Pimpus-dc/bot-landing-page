import { motion } from "framer-motion";
import { Sparkles, Image, MessageCircle, Wand2 } from "lucide-react";

const aiFeatures = [
  {
    icon: Image,
    title: "/imagine",
    description: "Generuj obrazy AI bezpośrednio na Discordzie",
    example: "/imagine sunset over mountains in anime style",
  },
  {
    icon: MessageCircle,
    title: "/write",
    description: "Twórz teksty, wiersze i historie z AI",
    example: "/write poem about friendship",
  },
  {
    icon: Wand2,
    title: "AI Chatbot",
    description: "Stwórz bota z własną osobowością i historią",
    example: "Nadaj botowi charakter pomocnego asystenta",
  },
];

export const AISection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Nowość</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Poznaj <span className="text-gradient">AI Bota</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wykorzystaj potęgę sztucznej inteligencji na swoim serwerze Discord.
            Generuj obrazy, pisz teksty i rozmawiaj z AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground font-mono">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="bg-secondary/50 rounded-lg p-3 border border-border/50">
                <code className="text-xs text-muted-foreground">
                  {feature.example}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
