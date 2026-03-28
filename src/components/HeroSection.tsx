import { motion } from "framer-motion";
import heroMockup from "@/assets/images/hero-mockup.webp";
import amandaBallis from "@/assets/images/amanda-ballis.webp";
import { Star } from "lucide-react";

const CTA_LINK = "https://ggcheckout.app/checkout/v2/vvGdsvJyn6wBQsx56aQZ";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="relative max-w-6xl mx-auto px-5 pt-12 pb-8 md:pt-20 md:pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                🍰 Restrição Alimentar? Isso mudou!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-5"
            >
              Agora você pode comer{" "}
              <span className="text-primary">sua sobremesa favorita</span>{" "}
              de domingo a domingo,{" "}
              <span className="italic">sem culpa!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              + de 300 Sobremesas <strong className="text-foreground">Zero Açúcar, Glúten e Lactose.</strong>
            </motion.p>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <img
                src={amandaBallis}
                alt="Amanda Ballis - Nutricionista"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
              />
              <div className="text-left">
                <p className="text-foreground font-semibold text-sm">Por Amanda Ballis</p>
                <p className="text-muted-foreground text-xs">Nutricionista</p>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col items-center lg:items-start gap-2 mb-8"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                <span className="text-muted-foreground text-sm ml-2 font-medium">(2.137 avaliações)</span>
              </div>
              <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: "97%" }} />
              </div>
              <span className="text-accent text-xs font-bold">97% de aprovação</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href={CTA_LINK} className="cta-button animate-pulse-glow text-base md:text-lg">
                QUERO APROVEITAR O DESCONTO →
              </a>
              <p className="text-muted-foreground text-xs mt-3">⚡ Acesso imediato • Garantia de 7 dias</p>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1 max-w-md lg:max-w-lg"
          >
            <img
              src={heroMockup}
              alt="300 Receitas de Sobremesas Zero - Ebook"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
