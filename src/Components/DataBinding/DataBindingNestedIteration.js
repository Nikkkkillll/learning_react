export default function DataBindingNestedIteration() {
    var menu = [
        { Categories: "Electronics", Product: ["Samsung Tv", "Mobile"] },
        { Categories: "Footwear", Product: ["Nike", "Adidas"] }
    ]
    return (
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map((value) => {
                        return (

                            <li>{value.Categories}
                                <ul>
                                    {
                                        value.Product.map((prod) => {
                                            return (


                                                <li>{prod}</li>

                                            )
                                        })
                                    }
                                </ul>
                            </li>


                        )
                    })
                }
            </ol>
            <h2>Select A Product</h2>
            <select>
                {
                    menu.map((item)=>{ 
                        return(
                        <optgroup key={item.Categories} label={item.Categories}>
                            {
                                item.Product.map((value)=>{
                                    return(
                                    <option key={value}>{value}</option>
                                    )
                                })
                            }

                        </optgroup>
                        ) 
                    })
                }
            </select>
        </div>
    )
}