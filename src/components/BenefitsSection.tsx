import { motion } from "framer-motion";
import { Target, Heart, Scale, Baby, Sparkles, ChefHat, ShieldCheck } from "lucide-react";

const scrollToOffer = () => {
  document.getElementById("oferta-principal")?.scrollIntoView({ behavior: "smooth" });
};

const benefits = [
  { icon: Target, text: <>Controlar a <strong>compulsão por açúcar</strong></> },
  { icon: Heart, text: <><strong>Controlar sua glicemia</strong> sem abrir mão do prazer de comer doces.</> },
  { icon: Sparkles, text: <>Garantir <strong>digestão leve e confortável</strong> após comer sua sobremesa</> },
  { icon: Scale, text: <><strong>Perder peso</strong> comendo seus doces favoritos na versão fit, com <strong>o mesmo sabor dos tradicionais</strong></> },
  { icon: ShieldCheck, text: <><strong>Manter uma rotina de alimentação saudável</strong> mesmo quando quiser comer um docinho</> },
  { icon: Baby, text: <><strong>Garantir que seu filho</strong> tenha uma <strong>alimentação equilibrada</strong> enquanto curte os sabores da infância</> },
  { icon: Sparkles, text: <><strong>Ter sabores inéditos e saudáveis para experimentar por anos</strong></> },
  { icon: ChefHat, text: <>Não tem muita <strong>experiência na cozinha.</strong> São receitas MUITO fáceis de fazer, com ingredientes que <strong>todo mundo tem em casa!</strong></> },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Baixando agora mais de 300 receitas, você vai:
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <button onClick={scrollToOffer} className="cta-button">
            QUERO APROVEITAR O DESCONTO →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
