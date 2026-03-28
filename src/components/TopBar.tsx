const CTA_LINK = "https://ggcheckout.app/checkout/v2/vvGdsvJyn6wBQsx56aQZ";

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-secondary text-secondary-foreground">
      <a
        href={CTA_LINK}
        className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        🍰 <span>Oferta Especial:</span>{" "}
        <span className="text-primary font-bold">+300 Receitas por apenas R$10</span>{" "}
        <span className="hidden sm:inline">— Acesso Imediato!</span>
        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-0.5 rounded-full ml-2">
          APROVEITAR
        </span>
      </a>
    </div>
  );
};

export default TopBar;
