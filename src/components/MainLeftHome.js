import React from 'react';
import './MainLeftHome.css';

export default (props) => {
    return (
        <div className="main-left-home mt-5">
            <div>
                <p className="h4">Đặt đồ ăn, giao hàng từ 20'...</p>
                <p className="local">Có 41855 địa điểm ở Hà Nội từ 00:00 - 23-59</p>
            </div>
            <div className="input-group input-group-lg mt-2 mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm địa điểm, món ăn, địa chỉ..."
                />
                <div className="input-group-append">
                    <button type="button" className="btn btn-primary d-flex align-items-center">
                        <span className="input-group icon-search"></span>
                    </button>
                </div>
            </div>
            <div className="category-list-filter ">
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">All</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Đồ ăn</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Đồ uống</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Đồ chay</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Bánh kem</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Tráng miệng</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Homemade</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Vỉa hè</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Pizza/Burger</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Món gà</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Món lẩu</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Shushi</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Mì phở</span>
                </a>
                <a className="mr-4 mb-4" href="/">
                    <span className="category-item">Cơm hộp</span>
                </a>
            </div>
            <div className="mb-4">
                <div>
                   Sử dụng App Now để có nhiều giảm giá<br/>
                    và trải nghiệm tốt hơn
                </div>
            </div>
            <div>
                <img className="mr-4" width="150" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Faivalable-on-the-app-store-2.svg?v=1593056874617"/>
                <img width="150" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fgoogle-play-badge.svg?v=1593056932709"/>
            </div>
        </div>
    );
}