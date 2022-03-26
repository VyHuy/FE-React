import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DeleteProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  
  let { id } = useParams();
  useEffect(async () => {
    let result = await fetch(`http://localhost:8000/api/updateProduct/${id}`);
    
     const resultX = await result.json();
     resultX.forEach(element => {
      setData(element)
     });
  }, []);
  async function edit(){
    let item = {title, description,img,price}
    // console.log('item',item);
    let resultNew = await fetch(`http://localhost:8000/api/updateProduct/${id}`,{
      method:"POST",
      body: JSON.stringify(item),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    window.location.href = "/";
  }
  
  return (
    <div></div>
  );
}
export default DeleteProduct;
