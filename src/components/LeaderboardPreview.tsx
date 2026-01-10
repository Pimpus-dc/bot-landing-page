import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Michał", xp: 15420, level: 42, avatar: "🥇" },
  { rank: 2, name: "Ania", xp: 14230, level: 40, avatar: "🥈" },
  { rank: 3, name: "Kuba", xp: 13100, level: 38, avatar: "🥉" },
  { rank: 4, name: "Zosia", xp: 11890, level: 35, avatar: "👤" },
  { rank: 5, name: "Tomek", xp: 10540, level: 33, avatar: "👤" },
];

export const LeaderboardPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-muted-foreground">System poziomów</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Leaderboard</span> &<br />
              Nagrody
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Motywuj społeczność do aktywności! Użytkownicy zdobywają XP za pisanie
              wiadomości i wspinają się w rankingu. Nagradzaj ich automatycznymi
              rolami i specjalnymi przywilejami.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Automatyczne role</p>
                  <p className="text-sm text-muted-foreground">
                    Przyznawaj role za osiągnięcie poziomu
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Publiczny ranking</p>
                  <p className="text-sm text-muted-foreground">
                    Udostępnij leaderboard jako stronę WWW
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 glow"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Ranking serwera</h3>
              <span className="text-xs text-muted-foreground">Live preview</span>
            </div>
            <div className="space-y-3">
              {leaderboardData.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-3 rounded-xl ${
                    user.rank <= 3
                      ? "bg-gradient-to-r from-primary/10 to-transparent"
                      : "bg-secondary/30"
                  }`}
                >
                  <span className="text-2xl w-10 text-center">{user.avatar}</span>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.xp.toLocaleString()} XP
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">LVL {user.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
