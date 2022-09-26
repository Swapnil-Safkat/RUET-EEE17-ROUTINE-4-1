import { useEffect, useState } from "react";

const useSection = (sec) => {
  const [section, setSection] = useState('');
  setSection(sec);
  return [section];
};
export default useSection;