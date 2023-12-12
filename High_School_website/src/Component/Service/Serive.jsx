// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Serive = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
            fetch("http://localhost:8080/productsall")
            .then(res =>res.json())
            .then(data =>setProduct(data))
    },[])
    
    return (
        <div>
           {
            products.map(product =>(<h4>{product.product}</h4>))
           }
        </div>
    );
};

export default Serive;
// const Serive = () => {
//     const [product, setProduct] = useState([]);
//     useEffect(()=>{
//         getProduct();
//     },[])
//     console.log(product);
//     const getProduct = ()=>{
//         axios.get("http://localhost:8080/productsall").then((res)=>setProduct(res.data))
//     }
//     return (
//         <div>
//             <h1>All Of service Here</h1>
//         </div>
//     );
// };
