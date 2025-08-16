export default function DataBindingComponent(){
    var product={
        name:'Samsung T.V',
        price:4700,
        stock:true
    }
    return(
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Product</dt>
                <dd>{(product.stock===true)?"Available":"Out of Stock"}</dd>
            </dl>

        </div>
    )
}