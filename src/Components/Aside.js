import React from "react";

function Aside(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

  let uniqueSizes = [...new Set(sizes)];
  let { selectedSize } = props;

  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span
            key={size}
            className={`size ${selectedSize.includes(size) ? "active" : ""}`}
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
