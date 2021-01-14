import { useState } from "react";

const useCheckbox = (initialValue) => {
  const [checked, setChecked] = useState(initialValue);
  const onChange = () => {
    setChecked(!checked);
  };
  return { checked, onChange };
};

export default useCheckbox;
