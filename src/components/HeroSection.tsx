import { motion } from "framer-motion";
import heroMockup from "@/assets/images/hero-mockup.webp";
import amandaBallis from "@/assets/images/amanda-ballis.webp";
import { Star } from "lucide-react";

const CTA_LINK = "https://pay.sobremesas-zero.descontoagora.site/checkout-white/?add-to-cart=5681";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8 md:pt-20 md:pb-16">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold backdrop-blur-sm">
            🍰 Restrição Alimentar? Isso mudou!
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-secondary-foreground mb-4"
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
              className="text-lg md:text-xl text-secondary-foreground/80 mb-6"
            >
              + de 300 Sobremesas <strong>Zero Açúcar, Glúten e Lactose.</strong>
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
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <p className="text-secondary-foreground font-semibold text-sm">Por Amanda Ballis</p>
                <p className="text-secondary-foreground/60 text-xs">Nutricionista</p>
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
                <span className="text-secondary-foreground/80 text-sm ml-2 font-semibold">(2.137 avaliações)</span>
              </div>
              <div className="w-48 h-2 bg-secondary-foreground/10 rounded-full overflow-hidden">
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
              <p className="text-secondary-foreground/50 text-xs mt-3">⚡ Acesso imediato • Garantia de 7 dias</p>
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
