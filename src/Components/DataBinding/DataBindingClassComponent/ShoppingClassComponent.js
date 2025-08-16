import React from "react";
import { CardComponent } from "./CardComponent";
import CardComponentClass from "./CardComponentClass";

export default class ShoppingClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: []
        }
        this.handleCategoryChange=this.handleCategoryChange.bind(this);  
    }
    GetCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => {
                this.setState({ categories: data });
            })
            .catch(err => {
                console.error("Error fetching categories:", err);
            });
    }
    GetProducts(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
            })
            .catch(err => {
                console.error("Error fetching categories:", err);
            });
    }
    componentDidMount() {
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');
    }
    handleCategoryChange(e){
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);

    }
    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center"><span className="bi bi-cart"></span> Shopping Cart</header>
                <section className="row ">
                    <nav className="col-3">
                        <h2>Select Categopry</h2>
                        <select onChange={this.handleCategoryChange} className="form-select">
                            {Array.isArray(this.state.categories) && this.state.categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                this.state.products.map(product =>
                                    <>
                                    <CardComponentClass key={product.id} product={product}/>
                                    {/* <CardComponent key={product.id} product={product}/> */}
                                    </>
                                    // <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }} >
                                    //     <img src={product.image} className="card-img-top" height="150" />
                                      //     <div className="card-header" style={{ width: '160px' }}>
                                    //         <p>{product.title}</p>
                                    //     </div>
                                    // </div>
                                )
                            }


                        </div>

                    </main>
                </section>

            </div>
        )
    }
}