import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const Names = ["Munna", "Mahadi", "Rubel", "Rafi", "Durbol"];
  const products = [
    { name: "Sneakers", price: "$29.23" },
    { name: "Watch", price: "$30.20" },
    { name: "Mens Cloths", price: "$20" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Pogrammers!</h1>
        <ul>
          {Names.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
        <Count></Count>
        <User></User>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={Names[0]} working="no jobs"></Person>
        <Person name={Names[1]} working="no jobs"></Person>
        <Person name={Names[2]} working="no jobs"></Person>
      </header>
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(23);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}
function User() {
  const [user, userCount] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => userCount(data));
  });
  return (
    <div>
      <h2>Dynamic User:{user.length}</h2>
      <h4>User name</h4>
      <ul>
        {user.map((users) => (
          <li>{users.name}</li>
        ))}
      </ul>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "400px",
    width: "400px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Taka de</button>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{ border: "3px solid red", width: "500px", margin: "50px" }}>
      <h1>Hello My name is {props.name} </h1>
      <h3>and I am working for {props.working} </h3>
    </div>
  );
}
export default App;
