import { useFetchData } from "./useFetchData"
import React from "react"
export default function CustomHookDemo() {
    const [data] =useFetchData("https://fakestoreapi.com/products")
    
    return (
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.map(product =>
                        <li>{product.title}</li>
                    )
                }
            </ol>

        </div>
    )
}