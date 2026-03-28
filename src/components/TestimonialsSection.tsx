import { motion } from "framer-motion";
import depoLeticia from "@/assets/images/depo-leticia.jpg";
import depoWpp from "@/assets/images/depo-wpp.jpg";
import depoMarco from "@/assets/images/depo-marco.jpg";
import depo4 from "@/assets/images/depo-4.jpg";
import depo5 from "@/assets/images/depo-5.jpg";
import depo6 from "@/assets/images/depo-6.jpg";
import depo7 from "@/assets/images/depo-7.jpg";
import depoSobreZero from "@/assets/images/depo-sobre-zero.jpg";
import depoInsta from "@/assets/images/depo-insta.jpg";
import depo9 from "@/assets/images/depo-9.jpg";
import depo10 from "@/assets/images/depo-10.jpg";
import depo11 from "@/assets/images/depo-11.jpg";

const row1 = [depoLeticia, depoWpp, depoMarco, depo4, depo5, depo6];
const row2 = [depo7, depoSobreZero, depoInsta, depo9, depo10, depo11];

const TestimonialsSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Elas já estão <span className="text-primary">praticando as receitas</span>
          </h2>
        </motion.div>

        {/* Testimonial marquees */}
        <div className="space-y-4">
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee" style={{ width: "200%" }}>
              {[...row1, ...row1].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                  <img src={img} alt="depoimento" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-reverse" style={{ width: "200%" }}>
              {[...row2, ...row2].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-64 rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                  <img src={img} alt="depoimento" className="w-full h-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
