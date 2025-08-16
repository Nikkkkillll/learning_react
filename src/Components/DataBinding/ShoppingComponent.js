import { useState, useEffect } from "react";

export default function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setcartItems] = useState([]);
    const [itemsCount, setitemsCount] = useState(0);

    function getCartItemCount() {
        setitemsCount(cartItems.length)
    }


    function LoadCategories() {
        fetch('https://fakestoreapi.in/api/products/category')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.categories)) {
                    setCategories(data.categories);
                } else {
                    console.error("categories is not an array", data);
                    setCategories([]);
                }
            })
            .catch(err => {
                console.error("Error fetching categories:", err);
                setCategories([]);
            });
    }

    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    console.error("products is not an array", data);
                    setProducts([]);
                }
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setProducts([]);
            });
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.in/api/products');
    }, []);

    function handleCategoryChange(e) {
        //this will not work because to fect the required category there is no API for it 
        LoadProducts(`https://fakestoreapi.in/api/products/category/${e.target.value}`)

    }
    function handleAddToCart(e) {
        alert("Item Added to cart");
        fetch(`https://fakestoreapi.in/api/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                setcartItems(prevItems => [...prevItems, data]); // ✅ append to array
                setitemsCount(prev => prev + 1); // ✅ update count directly
            })
            .catch(err => console.error("Error adding to cart:", err));


    }


    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-card"></span> Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-3">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {categories.map(category => (
                                    <option key={category}>{category.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
                    {products.map(product => (
                        <div key={product.id} className="card m-2 p-2 w-25">
                            <img src={product.image} className="card-img-top" height="150px" alt={product.title} />
                            <div className="card-header" style={{ height: '170px' }}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    {/* <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success">
                                            {product.rating.rate}
                                            <span>[{product.rating.count}]</span>
                                        </span>
                                    </dd> */}
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button id={product.id} onClick={handleAddToCart} className="btn btn-danger w-100">
                                    <span className="bi bi-cart4"></span>Add to Cart
                                </button>


                            </div>

                        </div>
                    ))}
                </main>
                <aside className="col-3">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3">
                        </span>[{itemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <img src={item.image} width="50" height="50" alt={item.title} />
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">
                                            <span className="bi bi-trash"></span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </aside>
            </section>
        </div>
    );
}
