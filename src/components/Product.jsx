"use client";

import { useState, useEffect } from "react";


export default function Product() {
    const [product, SetProduct] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                return response.json()
            })

            .then((data) => {
                SetProduct(data.products);
                console.log(data)
            })
    },[])


    return (

        <>
             {product.map((item) => (
          <div key={item.id}>
                <h3>item title: {item.title}</h3><br></br>
            
                
            </div>
        ))}
        </>
    );


}