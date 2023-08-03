import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [apiData, setApiData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  useEffect(() => {
    axios({
      url: "localhost",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // Token: token,
      },
      data: {}
    })
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        setApiData([
          {
            name: "product1",
            amount: 20,
            quantity: 42
          },
          {
            name: "product2",
            amount: 20,
            quantity: 32
          },
          {
            name: "product3",
            amount: 20,
            quantity: 22
          },
          {
            name: "product4",
            amount: 20,
            quantity: 12
          },
          {
            name: "product5",
            amount: 20,
            quantity: 2
          }
        ]);
      });

    axios({
      url: "localhost",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // Token: token,
      },
      data: {}
    })
      .then((response) => {
        setTotalRevenue(response.data);
      })
      .catch((err) => {
        setTotalRevenue(134566);
      });
  }, []);
  return (
    <div className="App">
      <h1 style={{ marginBottom: "32px" }}> Top 5 Selling Products</h1>
      {apiData.map((elem, key) => (
        <div
          key={key}
          style={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid black",
            gap: "32px",
            marginBottom: "16px"
          }}
        >
          <span>Product Name : {elem.name}</span>
          <span>Quantity : {elem.quantity}</span>
          <span>Amount : Rs {elem.amount}</span>
        </div>
      ))}
      <h1>Total Revenue : {totalRevenue}</h1>
    </div>
  );
}

