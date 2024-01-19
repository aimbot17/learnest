import { companyLogos } from "../config/Index";

const CompanyScroller = () => {
  return (
    <div className="scroller-container">
      <div
        className={
          "flex w-full flex-row text-center justify-center gap-10 rounded-sm overflow-hidden scroller-content"
        }
      >
        {companyLogos.map((logo) => (
          <img
            key={logo.index}
            src={logo.img}
            alt={`company-${logo.index}`}
            loading="lazy"
            className={"w-32 object-contain aspect-video"}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyScroller;
