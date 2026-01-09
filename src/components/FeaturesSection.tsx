import { motion } from "framer-motion";
import {
  Music,
  Shield,
  Gamepad2,
  MessageSquare,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Muzyka",
    description:
      "Odtwarzaj muzykę z YouTube, Spotify i innych źródeł bezpośrednio na kanale głosowym.",
  },
  {
    icon: Shield,
    title: "Moderacja",
    description:
      "Automatycznie filtruj spam, przekleństwa i niechciane treści na swoim serwerze.",
  },
  {
    icon: Gamepad2,
    title: "Mini-gry",
    description:
      "Baw się z przyjaciółmi w quizy, zgadywanki i inne interaktywne gry.",
  },
  {
    icon: MessageSquare,
    title: "Własne komendy",
    description:
      "Twórz własne komendy i automatyczne odpowiedzi dopasowane do Twojego serwera.",
  },
  {
    icon: Zap,
    title: "Automatyzacja",
    description:
      "Automatyczne role, powitania i wiele więcej - oszczędź czas administracji.",
  },
  {
    icon: Users,
    title: "Statystyki",
    description:
      "Śledź aktywność serwera, najpopularniejsze kanały i zaangażowanie użytkowników.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Co potrafi <span className="text-gradient">nasz bot</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Odkryj wszystkie funkcje, które sprawią, że Twój serwer Discord
            stanie się jeszcze lepszy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover-lift group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
