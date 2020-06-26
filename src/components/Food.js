import React from 'react';
import Card from './Card';
import Footer from './Footer';

export default (props) => {
    const {foods, title} = props;
    return (
        <div className="container">
            <div className="h4 text-center p-4">{title}</div>
            <div className="row">
                {foods.map((food, index) => <div className=" col-6 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <Card food={food} />
                </div>)}
            </div>
            <Footer/>
        </div>
    );
}