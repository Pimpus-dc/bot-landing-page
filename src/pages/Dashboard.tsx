import { motion } from "framer-motion";
import { ArrowLeft, Plus, Search, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServerCard from "@/components/ServerCard";

const mockServers = [
  {
    id: "1",
    name: "Polska Społeczność Graczy",
    icon: "🎮",
    memberCount: 15420,
    isOnline: true,
    commandsUsed: 45230,
  },
  {
    id: "2",
    name: "Music Lovers",
    icon: "🎵",
    memberCount: 8340,
    isOnline: true,
    commandsUsed: 23150,
  },
  {
    id: "3",
    name: "Programiści PL",
    icon: "💻",
    memberCount: 12890,
    isOnline: true,
    commandsUsed: 67890,
  },
  {
    id: "4",
    name: "Anime & Manga",
    icon: "🌸",
    memberCount: 5670,
    isOnline: false,
    commandsUsed: 12340,
  },
  {
    id: "5",
    name: "E-Sport Arena",
    icon: "🏆",
    memberCount: 23100,
    isOnline: true,
    commandsUsed: 89450,
  },
  {
    id: "6",
    name: "Kreatywni Twórcy",
    icon: "🎨",
    memberCount: 4520,
    isOnline: true,
    commandsUsed: 8760,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Server className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Panel Serwerów</h1>
                <p className="text-xs text-muted-foreground">Zarządzaj swoimi serwerami</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Szukaj serwera..." 
                className="pl-9 w-64 bg-secondary border-border/50"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj bota
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="glass rounded-xl p-5">
            <p className="text-sm text-muted-foreground mb-1">Łącznie serwerów</p>
            <p className="text-3xl font-bold text-gradient">{mockServers.length}</p>
          </div>
          <div className="glass rounded-xl p-5">
            <p className="text-sm text-muted-foreground mb-1">Łącznie użytkowników</p>
            <p className="text-3xl font-bold text-gradient">
              {mockServers.reduce((acc, s) => acc + s.memberCount, 0).toLocaleString()}
            </p>
          </div>
          <div className="glass rounded-xl p-5">
            <p className="text-sm text-muted-foreground mb-1">Użytych komend</p>
            <p className="text-3xl font-bold text-gradient">
              {mockServers.reduce((acc, s) => acc + s.commandsUsed, 0).toLocaleString()}
            </p>
          </div>
        </motion.div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Twoje Serwery</h2>
          <p className="text-sm text-muted-foreground">
            {mockServers.filter(s => s.isOnline).length} online
          </p>
        </div>

        {/* Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockServers.map((server, index) => (
            <motion.div
              key={server.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServerCard
                name={server.name}
                icon={server.icon}
                memberCount={server.memberCount}
                isOnline={server.isOnline}
                commandsUsed={server.commandsUsed}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
