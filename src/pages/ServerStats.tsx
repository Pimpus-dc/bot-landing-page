import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, MessageSquare, Command } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const activityData = [
  { name: "Pon", commands: 120, messages: 450 },
  { name: "Wt", commands: 180, messages: 520 },
  { name: "Śr", commands: 150, messages: 480 },
  { name: "Czw", commands: 220, messages: 610 },
  { name: "Pt", commands: 280, messages: 720 },
  { name: "Sob", commands: 350, messages: 890 },
  { name: "Ndz", commands: 310, messages: 780 },
];

const topCommands = [
  { name: "!play", count: 1240 },
  { name: "!skip", count: 890 },
  { name: "!help", count: 650 },
  { name: "!ban", count: 120 },
  { name: "!mute", count: 95 },
];

const ServerStats = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold text-foreground">Statystyki Serwera</h1>
            <p className="text-xs text-muted-foreground">ID: {id}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Użyte komendy", value: "12,450", icon: Command, color: "text-primary" },
            { label: "Aktywni użytkownicy", value: "1,234", icon: Users, color: "text-discord-green" },
            { label: "Wiadomości/dzień", value: "5,670", icon: MessageSquare, color: "text-discord-yellow" },
            { label: "Wzrost", value: "+23%", icon: TrendingUp, color: "text-discord-green" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6 mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">Aktywność w tym tygodniu</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorCommands" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(235 86% 65%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(235 86% 65%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(139 47% 44%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(139 47% 44%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                <XAxis dataKey="name" stroke="hsl(220 10% 60%)" fontSize={12} />
                <YAxis stroke="hsl(220 10% 60%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 18% 10%)",
                    border: "1px solid hsl(220 15% 18%)",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="commands"
                  stroke="hsl(235 86% 65%)"
                  fillOpacity={1}
                  fill="url(#colorCommands)"
                  name="Komendy"
                />
                <Area
                  type="monotone"
                  dataKey="messages"
                  stroke="hsl(139 47% 44%)"
                  fillOpacity={1}
                  fill="url(#colorMessages)"
                  name="Wiadomości"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Najpopularniejsze komendy</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topCommands} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
                <XAxis type="number" stroke="hsl(220 10% 60%)" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="hsl(220 10% 60%)" fontSize={12} width={60} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220 18% 10%)",
                    border: "1px solid hsl(220 15% 18%)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" fill="hsl(235 86% 65%)" radius={[0, 4, 4, 0]} name="Użycia" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ServerStats;
