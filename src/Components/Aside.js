import React from "react";

import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Aside(props) {
  let data = useContext(UserContext);

  let sizes = data.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let uniqueSizes = [...new Set(sizes)];

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span
            key={size}
            className={`size ${
              data.selectedSize.includes(size) ? "active" : ""
            }`}
            onClick={() => props.handleClick(size)}
          >
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default Aside;
