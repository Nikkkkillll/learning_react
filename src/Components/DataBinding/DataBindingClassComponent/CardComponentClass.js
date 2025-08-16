import React from "react";

export default class CardComponentClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div key={this.props.product.id} className="card m-2 p-2" style={{ width: '200px' }} >
                <img src={this.props.product.image} className="card-img-top" height="150" />
                <div className="card-header" style={{ width: '160px' }}>
                    <p>{this.props.product.title}</p>
                </div>
            </div>
        )
    }
}