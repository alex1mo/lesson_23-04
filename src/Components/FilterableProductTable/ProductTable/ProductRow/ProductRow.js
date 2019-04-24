import React from "react";
import "./ProductRow.css";

const ProductRow = props => {
  let { data } = props;

  return (
    <div>
      {data.map((e, i) => {
        return (
          <div key={i}>
            <span>
              {e.name} {e.price}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductRow;
