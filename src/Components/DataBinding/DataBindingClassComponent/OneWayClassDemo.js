import React from "react";

export default class OneWayClassDemo extends React.Component{
    constructor(){
          super()
          this.state={
            title:'Product Details',
            Name:'SamSung Tv',
            Price:75469,
            Stock:true,
            Cities:['delhi','Hyd'],
            rating:{rate:4.5,count:6700}
          } 
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                     <dt>Stock</dt>
                    <dd>{(this.state.Stock==true)?"Available":"Out of Stock"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.Cities.map(city=>
                                    <li key={city}>{city  }</li>
                                )
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className="bi bi-star-fill text-success"></span>{this.state.rating.rate}[{this.state.rating.count}]

                    </dd>
                </dl>
            </div>
                

        )
    }
}