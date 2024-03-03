import { useEffect } from "react";
import CourseCard from "../../components/courseCard.component";
import useAPI from "../../hooks/useApi";
import { API_PRODUCT_ALL_URL } from "../../config/Index";

const Courses = () => {
  const Data = useAPI(API_PRODUCT_ALL_URL) as [any, boolean, boolean];
  const [data, error, loading] = Data;
  let store = data?.courses;

  for (let key in store) {
    if (store.hasOwnProperty(key)) {
      store = store[key];
    }
  }

  return (
    <div>
      <h1>
        <CourseCard cardData={store} />
      </h1>
    </div>
  );
};

export default Courses;
