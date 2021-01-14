import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    if (typeof e === "object") {
      setValue(e.target.value);
    } else {
      setValue(e);
    }
  };
  return { value, onChange };
};

export default useInput;
