import { motion } from "framer-motion";
import { ArrowLeft, Save, Bell, Shield, Music, Gamepad2, Terminal, Bot, ToggleLeft, ToggleRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const modules = [
  { id: "music", name: "Muzyka", icon: Music, description: "Odtwarzanie muzyki z YouTube i Spotify", enabled: true },
  { id: "moderation", name: "Moderacja", icon: Shield, description: "Automatyczne usuwanie spamu i ostrzeżenia", enabled: true },
  { id: "games", name: "Mini-gry", icon: Gamepad2, description: "Gry i zabawy dla członków serwera", enabled: false },
  { id: "commands", name: "Własne komendy", icon: Terminal, description: "Tworzenie własnych komend tekstowych", enabled: true },
  { id: "welcome", name: "Powitania", icon: Bell, description: "Wiadomości powitalne dla nowych członków", enabled: false },
  { id: "automod", name: "AutoMod", icon: Bot, description: "Zaawansowana automatyczna moderacja", enabled: true },
];

const ServerManage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [prefix, setPrefix] = useState("!");
  const [enabledModules, setEnabledModules] = useState<Record<string, boolean>>(
    Object.fromEntries(modules.map(m => [m.id, m.enabled]))
  );

  const toggleModule = (moduleId: string) => {
    setEnabledModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const handleSave = () => {
    toast({
      title: "Zapisano!",
      description: "Ustawienia serwera zostały zaktualizowane.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="font-semibold text-foreground">Zarządzanie Serwerem</h1>
              <p className="text-xs text-muted-foreground">ID: {id}</p>
            </div>
          </div>
          <Button onClick={handleSave} className="bg-discord-green hover:bg-discord-green/90">
            <Save className="w-4 h-4 mr-2" />
            Zapisz zmiany
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* General Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl p-6 mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">Ustawienia ogólne</h2>
          <div className="grid gap-4 max-w-md">
            <div>
              <Label htmlFor="prefix">Prefix komend</Label>
              <Input
                id="prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="mt-1.5 bg-secondary"
                placeholder="!"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Znak używany przed komendami (np. !help)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">Moduły</h2>
          <div className="grid gap-3">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleModule(module.id)}
                  className="text-2xl transition-colors"
                >
                  {enabledModules[module.id] ? (
                    <ToggleRight className="w-10 h-10 text-discord-green" />
                  ) : (
                    <ToggleLeft className="w-10 h-10 text-muted-foreground" />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ServerManage;
