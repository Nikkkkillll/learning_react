
export  default function DataBindingTableComponent(){
//data as Array of Object
var product=[
    {Name:"Samsung Tv",Price:54000.56},
    {Name:"Apple Tv",Price:144000.56}
];

    return(
        <div className="container">
            <h2>Product Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((prod)=>{
                            return(
                            <tr>
                                <td>{prod.Name}</td>
                                <td>{prod.Price}</td>
                            </tr>
                            )

                        })
                    }
                </tbody>
                
            </table>

        </div>
    )
}