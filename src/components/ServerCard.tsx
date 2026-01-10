import { motion } from "framer-motion";
import { Users, Settings, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServerCardProps {
  id: string;
  name: string;
  icon: string;
  memberCount: number;
  isOnline: boolean;
  commandsUsed: number;
}

const ServerCard = ({ id, name, icon, memberCount, isOnline, commandsUsed }: ServerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl p-5 flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-2xl font-bold overflow-hidden">
            {icon.startsWith("http") ? (
              <img src={icon} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-gradient">{icon}</span>
            )}
          </div>
          <div 
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-card ${
              isOnline ? "bg-discord-green" : "bg-muted-foreground"
            }`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {memberCount.toLocaleString()} członków
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4" />
          <span>{commandsUsed.toLocaleString()} komend</span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <Button variant="secondary" size="sm" className="flex-1" asChild>
          <Link to={`/server/${id}/manage`}>
            <Settings className="w-4 h-4 mr-1.5" />
            Zarządzaj
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to={`/server/${id}/stats`}>
            Statystyki
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServerCard;
