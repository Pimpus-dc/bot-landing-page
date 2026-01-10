import { Bot, Github, MessageCircle, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Funkcje", href: "#features" },
    { label: "Cennik", href: "#pricing" },
    { label: "Panel", href: "/dashboard" },
    { label: "Dokumentacja", href: "#docs" },
  ],
  legal: [
    { label: "Regulamin", href: "#terms" },
    { label: "Polityka prywatności", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
  ],
  support: [
    { label: "Centrum pomocy", href: "#help" },
    { label: "Serwer Discord", href: "#discord" },
    { label: "Status", href: "#status" },
    { label: "Kontakt", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: "#discord", label: "Discord" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Github, href: "#github", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DiscordBot</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Najlepszy bot Discord do moderacji, muzyki, gier i automatyzacji
              Twojego serwera.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Prawne</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Wsparcie</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 DiscordBot. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Wszystkie systemy sprawne
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
