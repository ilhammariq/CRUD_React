import { Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function AddProduct() {
  const initialState = {
    productName: "",
    productPrice: "",
    stock: "",
  };

  const [input, setInput] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/products`, {
        productName: input.productName,
        productPrice: parseInt(input.productPrice),
        stock: parseInt(input.stock),
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setInput(initialState);
        swal("Good job!", "You clicked the button!", "success");
      });
  };
  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="productName"
          name="productName"
          placeholder="Enter Product Name"
          value={input.productName}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Product Price
        </label>
        <input
          type="text"
          className="form-control"
          id="productPrice"
          name="productPrice"
          placeholder="Enter Product Price"
          value={input.productPrice}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="stock" className="form-label">
          Stock
        </label>
        <input
          type="text"
          className="form-control"
          id="stock"
          name="stock"
          placeholder="Enter Product Stock"
          value={input.stock}
          onChange={handleInput}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit} className="bg-dark">
        Sumbit
      </Button>
      <Link to="/" className="text-decoration-none ms-2">
        <Button variant="contained" className="bg-warning">
          Back
        </Button>
      </Link>
    </div>
  );
}
