import React, { Component } from 'react';
import './App.css';
import Products from './components/Products'


class  App extends Component  {
  constructor(props){
    super(props)
    this.state = { products:[] , filteredProducts: [] , }
  }
  componentWillMount(){
    fetch("http://localhost:8001/products").then(res => res.json())
    .then(data => this.setState({
      products:data,
      filteredProducts:data
    }));
  }
  render(){
  return (
    <div className="container">
      <h1>Leah's Kitchen Shopping cart</h1>
      <br/>
      <div className="row">
        <div className="col-md-8">
          <Products products={this.state.filteredProducts} handleAddToCart = {this.handleAddToCart} />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
  );
}
}

export default App;
