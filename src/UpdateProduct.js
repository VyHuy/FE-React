import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  // console.log(data.img);
  let { id } = useParams();
  useEffect(async () => {
    let result = await fetch(`http://localhost:8000/api/updateProduct/${id}`);

    const resultX = await result.json();
    // console.log(resultX);
    resultX.forEach((element) => {
      setData(element);
    });
  }, []);
  async function edit() {
    const formData = new FormData();
    formData.append("title", title || data.title);
    formData.append("description", description || data.description);
    formData.append("img", img || data.img);
    formData.append("price", price || data.price);
    
    let result = await fetch(`http://localhost:8000/api/updateProduct/${id}`, {
      method: "POST",
      body: formData,
      // headers:{
      //   'Accept': 'application/json',
      //   'Content-type': 'application/json',
      // },
    });
    navigate("/");
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center display-3 my-5">EditProduct</h1>
          </div>
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <input
                type="text"
                name="title"
                defaultValue={data.title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control my-2"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                defaultValue={data.description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control my-2"
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                // defaultValue={data.img}
                onChange={(e) => setImg(e.target.files[0])}
                className="form-control my-2"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="price"
                defaultValue={data.price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control my-2"
              />
            </div>
            <div className="form-group">
              <button onClick={edit} className="btn btn-block btn-dark">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdateProduct;
