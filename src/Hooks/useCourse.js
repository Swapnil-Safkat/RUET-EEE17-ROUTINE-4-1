import { useEffect, useState } from "react";

const useCourse = (cou) => {
  const [course, setCourse] = useState([["EEE-4107", "EEE-4117", "IPE-4111"]]);
  setCourse(cou);
  useEffect(() => { console.log(course); }
    , [course])
  return [course];
};
export default useCourse;