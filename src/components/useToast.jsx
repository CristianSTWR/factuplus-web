import { useState } from "react";

export default function useToast() {

  const [toast, setToast] = useState({
    visible: false,
    msg: "",
    type: "success"
  });

  const mostrarToast = (
    msg,
    type = "success"
  ) => {

    setToast({
      visible: true,
      msg,
      type
    });

    setTimeout(() => {
      setToast(t => ({
        ...t,
        visible: false
      }));
    }, 4000);
  };

  return {
    toast,
    mostrarToast
  };
}