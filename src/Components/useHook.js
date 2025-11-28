import { useState } from "react";

function useHook(initial = "", onSubmitCallback) {
  const [name, setName] = useState(initial);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitCallback(name);
  };

  return { name, handleChange, handleSubmit };
}

export default useHook;
