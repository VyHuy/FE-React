import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  
  async function add() {

    const formData = new FormData;
    formData.append('img', img)
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)

    
    let result = await fetch(`http://localhost:8000/api/addProduct`, {
      method: "POST",
      body: formData,
    });
        navigate("/");
  }

  return (
    <div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center display-3 my-5">AddProduct</h1>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control my-2"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value={description}
                
                onChange={(e) => setDescription(e.target.value)}
                className="form-control my-2"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                
                onChange={(e)=>setImg(e.target.files[0])}
                className="form-control my-2"
                placeholder="img"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control my-2"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <button onClick={add} className="btn btn-block btn-dark">
                Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
