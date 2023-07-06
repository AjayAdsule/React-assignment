import React, { useState } from "react";
import { BiTrash} from "react-icons/bi";
const App = () => {
  const [product, setProduct] = useState([]);
  const [updateProduct, setUpdateProduct] = useState([]);
  const handleChange = (e) => {
    setProduct(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: new Date().getTime().toString(), product };
    setUpdateProduct((updateProduct) => {
      return [...updateProduct, newProduct];
    });
    setProduct('')
  };
  const handleRemove=(id)=>{
    const deleteProduct=updateProduct.filter((items)=>{
      return items.id!==id;
    })
    setUpdateProduct(deleteProduct);
  }
  console.log(updateProduct);
  return (
    <React.Fragment>
      <main>
        <div className="container">
          <h3>Grocery Buds</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="item"
              id="item"
              value={product}
              placeholder="eg.egg"
              onChange={handleChange}
            />
            <button className="btn">Add</button>
          </form>
         <div className="item">
         {
            updateProduct && updateProduct.map((item)=>{
              const {id,product}=item;
              return (
                <div key={id} className="items">
                  <p>{product}</p>
                  <BiTrash style={{color:'red'}} onClick={()=>handleRemove(id)}/>
                </div>
              )
            })
          }
         </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
