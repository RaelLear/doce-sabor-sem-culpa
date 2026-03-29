import { motion } from "framer-motion";
import { Check, Target, Heart, Scale, Baby, Sparkles, ChefHat, ShieldCheck } from "lucide-react";

const scrollToOffer = () => {
  document.getElementById("oferta-principal")?.scrollIntoView({ behavior: "smooth" });
};

const benefits = [
  { icon: Target, text: "Controlar a compulsão por açúcar" },
  { icon: Heart, text: "Controlar sua glicemia sem abrir mão do prazer de comer doces" },
  { icon: Sparkles, text: "Garantir digestão leve e confortável após comer sua sobremesa" },
  { icon: Scale, text: "Perder peso comendo seus doces favoritos na versão fit, com o mesmo sabor dos tradicionais" },
  { icon: ShieldCheck, text: "Manter uma rotina de alimentação saudável mesmo quando quiser comer um docinho" },
  { icon: Baby, text: "Garantir que seu filho tenha uma alimentação equilibrada enquanto curte os sabores da infância" },
  { icon: Sparkles, text: "Ter sabores inéditos e saudáveis para experimentar por anos" },
  { icon: ChefHat, text: "Receitas MUITO fáceis de fazer, com ingredientes que todo mundo tem em casa!" },
];

const forYou = [
  "Que tem dificuldade em emagrecer",
  "Que tem diabetes ou intolerância à lactose e glúten",
  "Que sente inchaço constante",
  "Que vive em guerra com sua alimentação",
  "Sofre pela vontade de comer doce",
  "Briga com o filho para comer bem",
];

const advantages = [
  "Sabores de verdade sem sair da dieta",
  "Seguro para diabéticos e intolerantes a lactose e glúten",
  "Receitas desenvolvidas por nutricionista",
  "Ingredientes simples e acessíveis",
  "Baixas calorias",
  "Doces rápidos e fáceis de preparar",
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-black text-secondary-foreground mb-6">É para você:</h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary-foreground/90">
                  <span className="text-lg">👉</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border"
          >
            <h3 className="text-2xl font-black mb-6">Olha as vantagens:</h3>
            <ul className="space-y-3">
              {advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

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
