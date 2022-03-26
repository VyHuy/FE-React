import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function List() {
  // const user = JSON.stringify(localStorage.getItem("user-info"));
  // console.log(user.name);
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch(`http://localhost:8000/api/list`);
    result = await result.json();
    setData(result);
  }, []);

  async function deleteProduct(id){
    let result = await fetch(`http://localhost:8000/api/deleteProduct/${id}`,{
      method: "POST",
    });
    
    window.location.reload();
  }
  // console.log("result", data);
  return (
    <div>
      <Link to={`login`}>Login</Link>
      <span title="xx">XX</span>
      <h1>Product List</h1>
      <Link to={`addProduct`}>Add new</Link>
      <table>
        <thead>
          <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Imgae</th>
          <th>Price</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return (
                <tr>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td><img src={"http://127.0.0.1:8000/storage/"+item.img} height="100px" width="100px"/></td>
                <td>{item.price}</td> 
                <td>
                  <Link to={`editProduct/${item.id}`}>Edit</Link>
                  <button onClick={()=>deleteProduct(item.id)} >Delete</button>
                </td>
                </tr>
            )
            })
          }
          </tbody>
      </table>
    </div>
  );
}
export default List;
