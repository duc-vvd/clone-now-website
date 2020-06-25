import React from 'react';
import './Card.css';

export default (props) => {
    const { imgUrl, title, price } = props.food;
    return (
        <div className="card mb-4 Card" style={{ width: "100%" }}>
            <img className="card-img-top" src={imgUrl} alt="Card image cap" />
            <div className="card-body p-2">
                <h5 className="card-title text-center CardTitle">{title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0">
                        {price}
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                        Thêm
                    </a>
                </div>
            </div>
        </div>
    );
}