import React from "react";
import "./Table.css";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import { useHistory } from "react-router-dom";

const Table = () => {
  const history = useHistory();

  const goProducts = () => {
    history.push("/products");
  };
  return (
    <div>
      <button className="btn" onClick={goProducts}>
        <img src={Group1} />
      </button>
      <button className="btn" onClick={goProducts}>
        <img src={Group2} />
      </button>
      <button className="btn" onClick={goProducts}>
        <img src={Group3} />
      </button>
      <button className="btn" onClick={goProducts}>
        <img src={Group4} />
      </button>
    </div>
  );
};

export default Table;
