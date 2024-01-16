import {
  amazon,
  google,
  microsoft,
  goldmanSachs,
  paypal,
  samsung,
  saleforce,
  isro,
} from "../config/Index";

const CompanyScroller = () => {
  return (
    <div className="scroller-container">
      <div
        className={
          "flex flex-row text-center justify-center gap-10 w-11/12 rounded-sm overflow-hidden scroller-content"
        }
      >
        {[
          amazon,
          google,
          microsoft,
          goldmanSachs,
          paypal,
          samsung,
          saleforce,
          isro,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`company-${index}`}
            className={"w-32"}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyScroller;
