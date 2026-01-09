import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">DiscordBot</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#regulamin"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Regulamin
            </a>
            <a
              href="#prywatnosc"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Polityka prywatności
            </a>
            <a
              href="#kontakt"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Kontakt
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 DiscordBot. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
