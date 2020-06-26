import React from 'react';
import './LoginPage.css';

export default (props) => {
    return (
        <div className="inner-bg">
            <div className="row">
                <div className="form-box mt-5 ml-auto mr-auto p-3">
                    <div className="wrap-logo mb-5">
                        <img src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fuser.svg?v=1593188345369"/>
                    </div>
                    <div className="wrap-input mb-4">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="wrap-input mb-5">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="wrap-btn mb-5">
                        <div>Sign up</div>
                    </div>
                    <div className="wrap-btn-2">
                        <div>Back to login</div>
                    </div>
                </div>
            </div>
        </div>
    );
}