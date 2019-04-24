import React from "react";
import "./ProductCategoryRow.css";

const ProductCategoryRow = props => {
  let { category } = props;
  return <div>{category}</div>;
};

export default ProductCategoryRow;
