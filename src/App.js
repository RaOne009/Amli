import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './ components/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navbar dark color = "dark">
          <div className = "container">
            <NavbarBrand href = "/">Amliya da dhaba </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
