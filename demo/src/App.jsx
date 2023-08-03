import React, { useEffect, useState } from "react";
import axios from "axios";

import './App.css'

/*
import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import iso from "./assets/iso.jpg"
import Badge from 'react-bootstrap/Badge';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
*/

function App() {
 
  const [apiData, setApiData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  useEffect(() => {
    axios({
      url: "http://localhost:5001/api/info",
      method: "GET",
      headers: {
        Accept: "application/json",
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
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

    axios.get(
    "http://localhost:5001/api/revenue",
    { crossdomain: true }
      
    )
      .then((response) => {
        setTotalRevenue(response.data.total_revenue);
        console.log(response)
      })
      .catch((err) => {
        // setTotalRevenue(134566);
      });
  }, []);

  return (
    /* 
    <div className="background-style">
   <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <h1 style={{textAlign:"center",marginBottom:32,paddingTop:32}}>
  <Badge bg="info" > Top 5 Selling Products</Badge>
      </h1>
      <div style={{display:"flex",justifyContent:"center",gap:"16px"}}>
      {apiData.map((elem, key) => (
        <Card style={{ width: "18rem" }} className="card-style">
        <Card.Img variant="top" src={iso} />
        <Card.Body>
          <Card.Title>{elem.name.toUpperCase()}</Card.Title>
          <Card.Text>
          Quantity: {elem.quantity}
          </Card.Text>
          <Card.Text>
          Price : Rs. {elem.amount}
          </Card.Text>
        </Card.Body>
      </Card>
  
      ))}
      </div>
      <h1 style={{textAlign:"center",marginTop:32}}>
  <Badge bg="info" > Total Revenue : Rs. {totalRevenue}</Badge>
      </h1>

    </div>
    */

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
  )
}

export default App


/*
.background-style{
  background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
  height: 100vh;
  
}

.card-style:hover{
  transform: scale(1.05);
  transition-duration: 300ms;
  cursor: pointer;
}

*/

