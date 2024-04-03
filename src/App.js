// import React from 'react';
// import MyCard from './Components/ProductCard';

// const App = () => {
//   return (
//     <div>
//       <MyCard />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import ProductCard from './Components/ProductCard';
// import TotalAmount from './Components/TotalAmount';


// const App = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: 10, image: '/path/to/image1.jpg' },
//     { id: 2, name: 'Product 2', price: 20, image: '/path/to/image2.jpg' },
//     { id: 3, name: 'Product 3', price: 30, image: '/path/to/image3.jpg' },
//   ];

//   return (
//     <div>
//       {products.map(product => (
//         <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
//       ))}
//       <TotalAmount items={products} />
//     </div>
//   );
// }

// export default App;
import React from 'react'
import  "./App.css"

import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index"

const App = () =>
{

const myState = useSelector((state) => state.changeTheNumber);
const dispatch = useDispatch();

return(
    <>
    <div className="container" style = {{marginTop:200}}>

        <h1>Increment / Decrement </h1>
        <h4>Using redux</h4>

        <div className="quantity">
         <a className="quamtity__minus" title = "Decrement" onClick={()=> dispatch(decNumber())}><span style = {{marginRight:50}}>   -   </span></a>
         <input name = "quantity" type = "text" className="quantity__input" value = {myState}/>
          <a className="quantitu__plus" title = "Increment" onClick={()=> dispatch(incNumber())}><span style = {{marginLeft:50}}>   +   </span></a>

        </div>

    </div>
    
    </>
)
}

export default App;
