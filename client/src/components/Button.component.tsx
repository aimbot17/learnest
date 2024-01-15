import { Link } from "react-router-dom";    

export const Button = ({ content, link }) => {
  return (
    <Link to={link}>
      <button
        className={"bg-btnColor text-white p-[15px] px-[27px] rounded-xl"}
        type="button"
      >
        {content}
      </button>
    </Link>
  );
};
