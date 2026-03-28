import { motion } from "framer-motion";
import brownie from "@/assets/images/brownie.jpg";
import manjar from "@/assets/images/manjar.jpg";
import doceDeLeite from "@/assets/images/doce-de-leite.jpg";
import pave from "@/assets/images/pave.jpg";
import pudim from "@/assets/images/pudim.jpg";
import moussMaracuja from "@/assets/images/mousse-maracuja.jpg";
import beijinho from "@/assets/images/beijinho.jpg";
import tortaMorango from "@/assets/images/torta-morango.jpg";
import tortaChocolate from "@/assets/images/torta-chocolate.jpg";
import rocambole from "@/assets/images/rocambole.jpg";
import forrobodo from "@/assets/images/forrobodo.jpg";
import geleia from "@/assets/images/geleia.jpg";
import cocada from "@/assets/images/cocada.jpg";
import quindim from "@/assets/images/quindim.jpg";

const CTA_LINK = "https://ggcheckout.app/checkout/v2/vvGdsvJyn6wBQsx56aQZ";

const recipeCards = [
  { name: "Brownie", img: brownie },
  { name: "Manjar", img: manjar },
  { name: "Doce de Leite", img: doceDeLeite },
  { name: "Pavê", img: pave },
  { name: "Pudim", img: pudim },
];

const carouselRow1 = [pave, moussMaracuja, doceDeLeite, beijinho, tortaMorango, tortaChocolate, rocambole];
const carouselRow2 = [pudim, manjar, brownie, forrobodo, geleia, cocada, quindim];

const RecipeCarousel = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            O que você <span className="text-primary">vai poder comer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Com ingredientes <strong className="text-foreground">acessíveis</strong> e <strong className="text-foreground">+ de 300 receitas simples</strong>,
            qualquer pessoa pode preparar sobremesas deliciosas <strong className="text-foreground">sem sair da dieta</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {recipeCards.map((recipe, i) => (
            <motion.div
              key={recipe.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-recipe group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={recipe.img}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-bold text-sm mb-2">{recipe.name}</h3>
                <div className="flex flex-wrap justify-center gap-1">
                  {["Sem Açúcar", "Sem Lactose", "Sem Glúten"].map(tag => (
                    <span key={tag} className="badge-zero text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8">
            Sim! São mais de <span className="text-primary">300 receitas!</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Zero Açúcar, Zero Glúten e Zero Lactose com o sabor das tradicionais!
          </p>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee" style={{ width: "200%" }}>
              {[...carouselRow1, ...carouselRow1].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-28 rounded-xl overflow-hidden">
                  <img src={img} alt="receita" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-reverse" style={{ width: "200%" }}>
              {[...carouselRow2, ...carouselRow2].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-40 h-28 rounded-xl overflow-hidden">
                  <img src={img} alt="receita" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href={CTA_LINK} className="cta-button">
            QUERO APROVEITAR O DESCONTO →
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecipeCarousel;
