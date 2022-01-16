import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import TabelComponent from "./components/TabelComponent";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
export default class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: "50%", margin: "auto" }}>
        <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <NavbarComponent />
                  <TabelComponent />
                </>
              }
            />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
