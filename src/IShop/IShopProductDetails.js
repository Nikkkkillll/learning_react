import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function IShopProductDetails() {
  const [product, setProduct] = useState(null);
  let params = useParams();

  useEffect(() => {
    let id = parseInt(params.id);
    axios.get(`http://127.0.0.1:4000/getproducts/${id}`)
      .then(response => {
        setProduct(response.data); // response.data will be a single object
      })
      .catch(err => {
        console.error("Error fetching product:", err);
      });
  }, [params.id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>

        <dt>Price</dt>
        <dd>{product.price}</dd>

        <dt>Preview</dt>
        <dd>
          <img src={product.image} width="100" height="100" alt={product.title} />
        </dd>

        <dt>Rating</dt>
        <dd>{product.rating?.rate ?? "N/A"}</dd>
      </dl>
      <br/>
      <div>
        {/* ✅ use product.category directly */}
        <Link to={`/products/${product.category}`}>Back To Products</Link>
      </div>
    </div>
  );
}
