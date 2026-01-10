import { motion } from "framer-motion";
import { Code, ArrowRight, Brackets, Variable } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const variables = [
  { name: "{user.mention}", desc: "Oznaczenie użytkownika" },
  { name: "{user.name}", desc: "Nazwa użytkownika" },
  { name: "{server.name}", desc: "Nazwa serwera" },
  { name: "{server.members}", desc: "Liczba członków" },
];

export const CustomCommandsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Code preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass rounded-2xl overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  custom-command.js
                </span>
              </div>
              
              {/* Code content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-purple-400">// </span>
                  <span>Komenda powitalna</span>
                </div>
                <div className="mt-2">
                  <span className="text-blue-400">!powitaj</span>
                </div>
                <div className="mt-4 bg-secondary/30 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-foreground">
                    👋 Cześć <span className="text-primary">{"{user.mention}"}</span>!
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Witaj na serwerze <span className="text-primary">{"{server.name}"}</span>!
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Jesteś członkiem nr <span className="text-primary">{"{server.members}"}</span> 🎉
                  </p>
                </div>
              </div>
            </div>

            {/* Variables list */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {variables.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 glass rounded-lg px-3 py-2"
                >
                  <Variable className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <code className="text-xs text-primary">{v.name}</code>
                    <p className="text-xs text-muted-foreground">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Brackets className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Własne komendy</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Twórz <span className="text-gradient">własne komendy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Bez kodowania! Używaj intuicyjnego edytora do tworzenia własnych
              komend z dynamicznymi zmiennymi. Bot może odpowiadać wiadomościami,
              nadawać role i wykonywać akcje.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Code className="w-5 h-5 text-primary" />
                Dynamiczne zmienne użytkownika i serwera
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Code className="w-5 h-5 text-primary" />
                Losowe odpowiedzi z jednej komendy
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Code className="w-5 h-5 text-primary" />
                Automatyczne nadawanie i odbieranie ról
              </li>
            </ul>
            <Link to="/dashboard">
              <Button className="bg-primary hover:bg-primary/90">
                Stwórz komendę
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
