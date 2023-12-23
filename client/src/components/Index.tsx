import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/slices/Auth";
import { RootState } from "./utils/RootState";
// import TypingEffect from "./utils/TypingEffect";

const Data = "Hello world!";

const App_Layout = () => {
  const Login = useSelector((store: RootState) => store.auth.Signup);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addUser(Data));
  };

  return (
    <div className={"pt-16 mt-10 flex items-center justify-center gap-10"}>
      <div>
        <div className={"text-4xl font-bold"}>
          Learn & become the
          <div className={"text-btnColor"}>
            Top {Login.length}% software
            <div>developer</div>
          </div>
        </div>
        <div>
          <span>Hello - Frontend</span>
          {/* <TypingEffect /> */}
        </div>
        <div>
          <button
            className={
              "bg-btnColor text-white p-[15px] px-[27px] rounded-xl mb-5"
            }
            type="button"
            onClick={() => handleAddItem()}
          >
            Add Percent
          </button>
        </div>
        <Link to={"/course"}>
          <button
            className={"bg-btnColor text-white p-[15px] px-[27px] rounded-xl"}
            type="button"
          >
            Explore new batches
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App_Layout;
