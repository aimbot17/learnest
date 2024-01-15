import { useTypingEffect } from "../hooks/useTypingEffect";
import { Button } from "../components/Button.component";

const App_Layout = () => {
  const { typedSuperpower } = useTypingEffect();

  return (
    <div className={"pt-16 mt-10 flex items-center justify-center gap-10"}>
      <div>
        <div className={"text-4xl font-bold"}>
          Learn & become the
          <div className={"text-btnColor"}>
            <span>Top 1% software</span>
            <div>developer</div>
          </div>
        </div>
        {/* <TypingEffect /> */}
        <div>{typedSuperpower}</div>
        <Button content={"Explore new batches"} link={"/course"} />
      </div>
    </div>
  );
};

export default App_Layout;
