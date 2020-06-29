import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './LoginPage.css';

export default class extends Component {
    constructor(props) {
        super(props);
        this.userInput = React.createRef();
        this.passwordInput = React.createRef();
        this.onSignUp = this.onSignUp.bind(this);
    }
    
    onSignUp() {
        const userName = this.userInput.current.value;
        const password = this.passwordInput.current.value;
        console.log("input", userName, password);
        this.props.value.onUserSignUp(userName,password);
    }
    render() {
        return (
            <div className="inner-bg">
                <div className="row">
                    <div className="form-box mt-5 ml-auto mr-auto p-3">
                        <div className="wrap-logo mb-5">
                            <img src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fuser.svg?v=1593188345369" />
                        </div>
                        <div className="wrap-input mb-4">
                            <input type="text" placeholder="Username" ref={this.userInput} />
                        </div>
                        <div className="wrap-input mb-5">
                            <input type="password" placeholder="Password" ref={this.passwordInput} />
                        </div>
                        <div className="wrap-btn mb-5" onClick={() => this.onSignUp()}>
                            <div>Sign up</div>
                        </div>
                        <Link to="/login">
                            <div className="wrap-btn-2">
                                <div>Back to login</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}