import React from "react";
import { useAlert } from "./Alert/AlertContext";

export const Main = () => {
  const { toggle } = useAlert();
  return (
    <div>
      <h1>Hellow</h1>
      <button onClick={toggle} className="btn btn-success">
        show Alert
      </button>
    </div>
  );
};
