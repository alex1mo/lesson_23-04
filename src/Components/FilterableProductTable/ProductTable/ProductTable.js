import React from "react";
import "./ProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow/ProductCategoryRow";
import ProductRow from "./ProductRow/ProductRow";

const ProductTable = props => {
  let { data } = props;
  let categories = [];

  data.forEach(e => {
    let category = e.category.toLowerCase();
    if (categories.indexOf(category) === -1) categories.push(category);
  });

  return (
    <div>
      {categories.map((category, i) => {
        return (
          <div key={i}>
            <ProductCategoryRow category={category} />
            <ProductRow
              data={data.filter(product => {
                return category === product.category.toLowerCase();
              })}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductTable;
