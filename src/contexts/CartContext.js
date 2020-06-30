import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props) {
        super(props);
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        if(!cartItems) {
            cartItems = []
        }
        this.state = {
            cartItems: cartItems,
            userLogin: {
                userInfo: {
                    userName:"",
                    password:""
                },
                isSuccess: false
            }
        }
    }

    addToCart(food) {
        const newCartItems = this.state.cartItems.concat(food);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems))
        this.setState({
            cartItems: newCartItems
        });
    }

    deleteFoodInCart(food) {
        const { cartItems } = this.state;
        const foodIndex = cartItems.indexOf(food);
        const newCartItems = [
            ...cartItems.slice(0, foodIndex),
            ...cartItems.slice(foodIndex + 1)
        ];
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        this.setState({
            cartItems: newCartItems
        });
    }

    onPay() {
        const login = JSON.parse(localStorage.getItem("login"));
        if(!login.isSuccess) {
            alert("Bạn vui lòng đăng nhập!");
            window.location = "/login";
        }else {
            alert("Giao dịch thành công.")
            localStorage.removeItem("cartItems");
            window.location = "/";
        }
        this.setState({
            cartItems: []
        });
        
    }

    deleteAllFoodInCart() {
        localStorage.removeItem("cartItems");
        this.setState({
            cartItems: []
        });
        window.location="/";
    }

    onUserSignIn(_userName, _password) {
        const userInfoLocal = JSON.parse(localStorage.getItem("userInfo"));
        if(userInfoLocal.userName === _userName && userInfoLocal.password === _password) {
            const Login = {isSuccess: true};
            localStorage.setItem("login", JSON.stringify(Login));
            window.location = "/";
        }else {
            alert("Tên tài khoản hoặc mật khẩu bạn nhập không đúng!")
        }
    }

    onUserSignUp(_userName, _password) {
        const userInfo = {
            userName: _userName,
            password: _password
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        alert("Bạn đã đăng ký thành công.");
    }

    render() {
        return (
            <CartContext.Provider 
                value={{
                    cartItems: this.state.cartItems,
                    addToCart: this.addToCart.bind(this),
                    deleteFoodInCart: this.deleteFoodInCart.bind(this),
                    deleteAllFoodInCart: this.deleteAllFoodInCart.bind(this),
                    onPay: this.onPay.bind(this),
                    onUserSignIn: this.onUserSignIn.bind(this),
                    onUserSignUp: this.onUserSignUp.bind(this)
                }}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}