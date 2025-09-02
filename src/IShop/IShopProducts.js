import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import axios  from "axios";

export default function(){
    const [category,setCategory]=useState();
    const [products,setProducts]=useState([]);
    let params=useParams();



    useEffect(()=>{
         setCategory(params.category);
         axios.get("http://127.0.0.1:4000/getproducts")
         .then(response=>{
            setProducts(response.data)
         })
    })
    return(
        <div>
            <h2>{category} List</h2>
            <ol>
                {
                    products.filter(item=>item.category==category).map(products=>
                        <li key={products.id}>
                            <img src={products.image} width="50" height="50"/>
                            <div>{products.title}</div>
                        </li>
                    )
                }
            </ol>
            <div>
                <Link to="/dashboard">Back To Categories</Link>
            </div>
        </div>
    )
}