import React from 'react';
import Footer from '../components/Footer';
import {CartContext} from '../contexts/CartContext';

export default (props) => {
    const {cartItems, deleteFoodInCart, deleteAllFoodInCart, onPay} = props.value;
    function format(n, currency = "đ") {
        return n.trim().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " " + currency;
    }
    const total = format(cartItems.reduce((total, food) => (total + parseInt(food.price)), 0).toString());
    return (
        <div className="container">
            <div className="h4 text-center p-4">Giỏ hàng</div>
            {parseInt(total) == 0 && <div className="alert alert-danger">Giỏ hàng trống</div>}
            {parseInt(total) != 0 && <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((food, index) => <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{food.title}</td>
                            <td><img src={food.imgUrl} style={{ width: "80px" }} /></td>
                            <td>{format(food.price)}</td>
                            <td>1</td>
                            <td>{format(food.price)}</td>
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => deleteFoodInCart(food)}>Xóa</button></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between align-items-center p-4 mb-5 border">
                    <div className="h4 text-center mb-0">Tổng</div>
                    <div className="h5 text-center mb-0">{total}</div>
                    <div>
                        <button type="button" className="btn btn-primary btn-sm mr-2" onClick={() => onPay()}>Thanh toán</button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteAllFoodInCart()}>Hủy đơn hàng</button>
                    </div>
                </div>
            </div>}
            <Footer />
        </div>
    );
}