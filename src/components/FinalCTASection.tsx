import { motion } from "framer-motion";
import { MousePointer, Mail } from "lucide-react";

const CTA_LINK = "https://ggcheckout.app/checkout/v2/vvGdsvJyn6wBQsx56aQZ";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-secondary-foreground mb-10">
            Receba o seu acesso <span className="text-primary">em 2 passos</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <MousePointer className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">1</span>
                <p className="text-secondary-foreground font-semibold mt-2">Clique no botão abaixo</p>
              </div>
            </div>

            <div className="hidden md:block w-16 h-[2px] bg-primary/30" />

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">2</span>
                <p className="text-secondary-foreground font-semibold mt-2">Digite seu melhor e-mail</p>
              </div>
            </div>
          </div>

          <a href={CTA_LINK} className="cta-button animate-pulse-glow text-lg">
            QUERO APROVEITAR O DESCONTO →
          </a>

          <p className="text-secondary-foreground/50 text-xs mt-4">
            Pagamento 100% seguro • Satisfação garantida por 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
