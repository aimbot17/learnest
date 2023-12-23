import { Fcomponents } from "../../config/data";

const Footer = () => {
  return (
    <div className="flex items-center justify-center m-10 bg-white">
      <div className="flex items-center justify-between gap-10 w-full max-w-6xl">
        {Fcomponents.map((el, i) => (
          <div
            key={el.index}
            className="flex flex-col items-start justify-center"
            style={{ height: "200px", width: "200px", flexGrow: 1 }}
          >
            <div key={i} className="">
              <div className="relative flex items-start justify-start text-base">
                {el.img && <img src={el.img} alt={el.name} className="h-12" />}
                <span className="text-lg font-bold">{el.name}</span>
              </div>
            </div>
            <div
              key={el.index}
              className="flex flex-col items-start justify-center"
              style={{ height: "200px", width: "200px", flexGrow: 1 }}
            >
              {el.text && <div className="text-black text-lg">{el.text}</div>}
              {el.subtext &&
                el.subtext.map((subitem) => (
                  <div
                    className="flex items-center justify-start"
                    key={subitem.index}
                  >
                    <span className="mr-2">{subitem.icon}</span>
                    <span>{subitem.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
