import { motion } from "framer-motion";
import { Check, Shield, Zap, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const CTA_LINK = "https://ggcheckout.app/checkout/v3/vvGdsvJyn6wBQsx56aQZ";

const items = [
  "+300 receitas de sobremesas zero",
  "Tortas Doces (BÔNUS)",
  "Lanche da Tarde (BÔNUS)",
  "Geléias Caseiras (BÔNUS)",
  "Acesso IMEDIATO e VITALÍCIO",
  "7 dias de garantia",
];

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <Clock className="w-4 h-4 text-primary" />
      <span className="text-sm font-semibold text-muted-foreground">Oferta expira em:</span>
      <div className="flex gap-1">
        {[pad(time.hours), pad(time.minutes), pad(time.seconds)].map((val, i) => (
          <span key={i} className="bg-secondary text-secondary-foreground font-mono font-bold text-lg px-2 py-1 rounded-md">
            {val}
            {i < 2 && <span className="text-primary ml-1">:</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="oferta-principal" className="section-padding bg-muted">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-2">
            Tudo o que você <span className="text-primary">receberá</span>,
          </h2>
          <p className="text-lg text-muted-foreground">
            aproveitando a <span className="text-primary font-bold">oferta de hoje</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-10 border border-border relative overflow-hidden"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-8 py-1 rotate-45 translate-x-6 -translate-y-1">
            OFERTA
          </div>

          <CountdownTimer />

          <div className="text-center mb-8">
            <span className="price-old">DE R$ 27,00</span>
            <div className="mt-2">
              <span className="text-muted-foreground text-lg">POR </span>
              <span className="price-new">R$ 10</span>
            </div>
            <p className="text-sm font-semibold mt-2" style={{ color: "#16a34a" }}>✅ Você economiza R$17,00</p>
          </div>

          <ul className="space-y-3 mb-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <a href={CTA_LINK} className="cta-button w-full text-center animate-pulse-glow block">
            QUERO APROVEITAR O DESCONTO →
          </a>

          <p className="text-center text-muted-foreground text-xs mt-4">
            ⚡ SOMENTE HOJE * Acesso imediato após a compra
          </p>

          <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Shield className="w-4 h-4" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Zap className="w-4 h-4" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
