import { motion } from "framer-motion";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "0 zł",
    period: "na zawsze",
    description: "Idealne na start",
    icon: Zap,
    features: [
      "Podstawowa moderacja",
      "System poziomów",
      "10 własnych komend",
      "Powitania użytkowników",
      "Podstawowe statystyki",
    ],
    cta: "Zacznij za darmo",
    popular: false,
  },
  {
    name: "Premium",
    price: "19,99 zł",
    period: "/miesiąc",
    description: "Dla wymagających serwerów",
    icon: Crown,
    features: [
      "Wszystko z Free",
      "Nielimitowane komendy",
      "AI generowanie obrazów",
      "AI pisanie tekstów",
      "Personalizacja bota",
      "Bez reklam",
      "Priorytetowe wsparcie",
    ],
    cta: "Wybierz Premium",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "499 zł",
    period: "jednorazowo",
    description: "Płać raz, korzystaj zawsze",
    icon: Sparkles,
    features: [
      "Wszystko z Premium",
      "Dożywotni dostęp",
      "Wczesny dostęp do nowości",
      "Ekskluzywna odznaka",
      "Dedykowane wsparcie",
    ],
    cta: "Kup Lifetime",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Prosty <span className="text-gradient">cennik</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wybierz plan dopasowany do potrzeb Twojego serwera. Bez ukrytych
            opłat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass rounded-2xl p-6 hover-lift ${
                plan.popular ? "border-primary/50 glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Najpopularniejszy
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10"
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${plan.popular ? "" : "text-primary"}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-muted"
                }`}
                variant={plan.popular ? "default" : "secondary"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
