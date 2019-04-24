import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar/SearchBar";
import ProductTable from "./ProductTable/ProductTable";

export class FilterableProductTable extends Component {
  state = {
    data: [],
    search: []
  };

  searchResults = e => {
    let value = e.target.value.toLowerCase();
    let search = this.state.data.filter(e => {
      let name = e.name.toLowerCase();
      return name.indexOf(value) !== -1;
    });

    this.setState({
      search
    });
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/severjason/f0a76c2ac8b3f15dac401b734b83dcf3/raw/a86f2d5b5c6578ae86c02d32d65bc0abaed4aeb9/products-mock-data.json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          data,
          search: data
        });
      });
  }

  render() {
    let { search } = this.state;

    return (
      <div>
        <SearchBar searchResults={this.searchResults} />
        <ProductTable data={search} />
      </div>
    );
  }
}

export default FilterableProductTable;
