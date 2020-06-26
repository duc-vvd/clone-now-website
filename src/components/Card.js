import React from 'react';
import './Card.css';
import {CartContext} from '../contexts/CartContext';

export default (props) => {
    const { imgUrl, title, price } = props.food;
    function format(n, currency = "đ") {
        return n.trim().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " " + currency;
    }
    return (
        <div className="card mb-4 Card" style={{ width: "100%" }}>
            <img className="card-img-top" src={imgUrl} alt="Card image cap" />
            <div className="card-body p-3">
                <h5 className="card-title text-center CardTitle">{title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0">
                        {format(price)}
                    </p>
                    <CartContext.Consumer>
                        {({addToCart}) => <a href="#" className="btn btn-primary btn-sm" onClick={()=> addToCart(props.food)}>
                        Thêm
                    </a>}
                    </CartContext.Consumer>
                </div>
            </div>
        </div>
    );
}