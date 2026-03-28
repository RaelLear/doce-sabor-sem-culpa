import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import tortaBonus from "@/assets/images/torta-bonus.jpg";
import cafeTardeBonus from "@/assets/images/cafe-tarde-bonus.jpg";
import geleiaBonus from "@/assets/images/geleia-bonus.jpg";

const bonuses = [
  {
    name: "Tortas Doces",
    description: "Zero açúcar, zero glúten e zero lactose",
    price: "R$ 39,90",
    img: tortaBonus,
  },
  {
    name: "Lanche da Tarde",
    description: "Zero açúcar, zero glúten e zero lactose",
    price: "R$ 29,90",
    img: cafeTardeBonus,
  },
  {
    name: "Geléias Caseiras",
    description: "Zero açúcar",
    price: "R$ 19,90",
    img: geleiaBonus,
  },
];

const BonusSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Gift className="w-4 h-4" />
            <span className="font-bold text-sm">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black">
            Você ainda <span className="text-primary">ganha + 3 bônus de presente!</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden group border border-border"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img
                  src={bonus.img}
                  alt={bonus.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  GRÁTIS
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-lg mb-1">{bonus.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{bonus.description}</p>
                <div>
                  <span className="price-old text-sm">{bonus.price}</span>
                  <span className="text-primary font-black text-xl ml-2">GRÁTIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
