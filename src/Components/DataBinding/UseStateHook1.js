
import { useState } from "react"

export default function UseStateHook1(){
    const [product,setName]= useState(["TV","Mobile","Shoe"]);

    return(
        <div className="container">
            <ol>
                {
                    product.map((prod)=>{
                        return(
                            <li key={prod}>{prod}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}