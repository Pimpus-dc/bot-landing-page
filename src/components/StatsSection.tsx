import { motion } from "framer-motion";
import { Server, Users, MessageSquare, Zap } from "lucide-react";

const stats = [
  {
    icon: Server,
    value: "50,000+",
    label: "Serwerów",
  },
  {
    icon: Users,
    value: "10M+",
    label: "Użytkowników",
  },
  {
    icon: MessageSquare,
    value: "500M+",
    label: "Wiadomości",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
