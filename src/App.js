import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import List from "./List";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<List />}></Route>
          <Route exact path="/addProduct" element={<AddProduct />}></Route>
          <Route exact path="/editProduct/:id" element={<UpdateProduct />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
