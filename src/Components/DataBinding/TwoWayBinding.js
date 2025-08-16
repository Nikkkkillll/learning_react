import { useState, useEffect } from "react";

export default function TwoWayBinding() {
    const [products, setProducts] = useState({ Name: '', Price: 0, City: '', Stock: false });
    const [newproducts, setNewProducts] = useState({ Name: '', Price: 0, City: '', Stock: false } );


    //this funcion is accepting on argument which is going o be return in input text box of name
    function handleName(e) {
        //the name will come and it will go and sit in Name by using setProducts property
        setProducts({
            Name: e.target.value,
            //if we Dont mention the default values then the feilds will be empty 
            Price: products.Price,
            City: products.City,
            Stock: products.Stock
        })
    }
    function handlePrice(e) {
        setProducts({
            Name: products.Name,
            Price: e.target.value,
            City: products.City,
            Stock: products.Stock
        })

    }
    function handleCity(e) {
        setProducts({
            Name: products.Name,
            Price: products.Price,
            City: e.target.value,
            Stock: products.Stock
        })

    }
    function handleStock(e) {
        setProducts({
            Name: products.Name,
            Price: products.Price,
            City: products.City,
            //here stock is not accepting the string t=it is accepting the bolean vlue 
            Stock: e.target.checked
        })

    }
    function handleRegisterClick(){
        setNewProducts(products);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={handleName} className="form-control" /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={handlePrice} className="form-control" /></dd>
                        <dd>
                            <select className="form-select" onChange={handleCity}>
                                <option>Delhi</option>
                                <option>Hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" onChange={handleStock} type="checkbox" /> Available
                        </dd>
                    </dl>
                    <button className="btn btn-primary w-100" onClick={handleRegisterClick}>Register</button>
                </div>
                <div className="col-9">
                     <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{newproducts.Name}</dd>
                        <dt>Price</dt>
                        <dd>{newproducts.Price}</dd>
                        <dt>City</dt>
                        <dd>{newproducts.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(newproducts.Stock == true) ? "Available" : "out of Stock"}</dd>
                    </dl>
                </div>



            </div>
        </div>
    )
}