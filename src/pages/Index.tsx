import { useTypingEffect } from "../hooks/useTypingEffect";
import { Button } from "../components/Button.component";
import CompanyScrollCarousel from "@/components/scroller.component";
import AuthChecker from "../utils/AuthCheck";
import { companyLogos } from "@/config/Index";

const App_Layout = () => {
  const { typedSuperpower } = useTypingEffect();

  return (
    <div className={"flex flex-col gap-5 bg-[#F8F8FD]"}>
      <div className={"pt-16 mt-10 flex items-center justify-center gap-10"}>
        <div className={"flex flex-col items-start justify-center gap-3"}>
          <div className={"text-4xl font-bold"}>
            Learn & become the
            <div className={"text-btnColor"}>
              <span>Top 1% software</span>
              <div>developer</div>
            </div>
          </div>
          <div className={"text-xl"}>{typedSuperpower}</div>
          <Button content={"Explore new batches"} link={"/course"} />
        </div>
        <div>
          <img />
        </div>
      </div>
      <div className={"flex flex-col gap-10 p-16"}>
        <h1 className={"text-3xl font-semibold text-center"}>
          Thousands of students achieved their{" "}
          <span className={"text-btnColor font-bold"}>dream job at</span>
        </h1>
        <div className="flex items-center justify-center p-10">
          <CompanyScrollCarousel data={companyLogos}/>
        </div>
      </div>
    </div>
  );
};

export default App_Layout;
