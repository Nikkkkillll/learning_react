import { useEffect, useState } from "react"
import { ProductContract } from "../contracts/ProductContract";
import { Button } from '@mui/material';

export function ProfuctComponent(){
    const [product,setProduct]=useState<ProductContract>();

    useEffect(()=>{
        setProduct({
            Name:"TV",
            Price:4500.45,
            Stock:true
        })
    })
    function handleClick(){
        alert('Registered')
    }
    return(
        <div>
            <dl>
                <dt>Name</dt>
                <dd>{product?.Name}</dd>
                <dt>Price</dt>
                <dd>{product?.Price}</dd>
                <dt>Stock</dt>
                <dd>{product?.Stock}</dd>
                <Button onClick={handleClick} variant="outlined" color="primary"  >Register</Button>
           </dl>
        </div>
        
    )

}