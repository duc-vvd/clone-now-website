import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }

    addToCart(food) {
        console.log(food);
        this.setState({
            cartItems: this.state.cartItems.concat(food)
        });
    }

    deleteFoodInCart(food) {
        const { cartItems } = this.state;
        const foodIndex = cartItems.indexOf(food);
        this.setState({
            cartItems: [
                ...cartItems.slice(0, foodIndex),
                ...cartItems.slice(foodIndex + 1)
            ]
        });
    }

    onPay() {
        this.setState({
            cartItems: []
        });
        window.location="/";
    }

    deleteAllFoodInCart() {
        this.setState({
            cartItems: []
        });
        window.location="/";
    }

    render() {
        console.log(this.state.cartItems)
        return (
            <CartContext.Provider 
                value={{
                    cartItems: this.state.cartItems,
                    addToCart: this.addToCart.bind(this),
                    deleteFoodInCart: this.deleteFoodInCart.bind(this),
                    deleteAllFoodInCart: this.deleteAllFoodInCart.bind(this),
                    onPay: this.onPay.bind(this)
                }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}