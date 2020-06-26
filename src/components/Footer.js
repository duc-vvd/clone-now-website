import React from 'react';
import './Footer.css';

export default (props) => {
    return(
        <div className="Footer d-flex justify-content-between">
            <div>
                <div className="font-weight-bold">Công ty</div>
                <ul className="menu-footer mt-2">
                    <li>Giới thiệu</li>
                    <li>Quy trình đặt món</li>
                    <li>Quy chế</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Bảo mật thông tin</li>
                    <li>Giải quyết khiêu nại</li>
                    <li>Liên hệ</li>
                    <li>Hợp tác nhân viên giao nhận</li>
                    <li>Đăng ký quán</li>
                    <li>Ứng dụng NowMerchant</li>
                </ul>
            </div>
            <div>
                <div className="font-weight-bold">Now App</div>
                <div className="apps d-flex align-items-center mt-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/202px-Apple_logo_black.svg.png" />
                    <div>IOS</div>
                </div>
                <div className="apps d-flex align-items-center mt-3">
                    <img src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fandroid-logo.svg?v=1593110368313" />
                    <div>Android</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="logo-footer mt-2 mb-2">
                    <img src="https://www.now.vn/app/assets/img/Logo-Nowvn-Elip.png?e398e9326ddac9d81cae2dfce3c1d96c"/>
                </div>
                <div className="mt-2 mb-3 font12">© 2020  Now - A Foody Corporation</div>
                <div className="social-ico">
                    <img className="mr-2" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Ffacebook.svg?v=1593111639446"/>
                    <img className="mr-2" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Fgoogle-plus.svg?v=1593111653866"/>
                    <img className="mr-2" src="https://cdn.glitch.com/c31c0916-94ae-4f0f-8115-6a77f2008a66%2Finstagram-sketched.svg?v=1593111644876"/>
                </div>
            </div>
            <div className="block-last">
                <div className="text-right font-weight-bold title-block mb-2">Địa chỉ công ty</div>
                <div className="d-flex flex-column align-items-end">
                    <div>Công ty Cổ Phần Foody</div>
                    <div>Tầng 10, tòa nhà Sonatus,</div>
                    <div>số 15 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP HCM</div>
                    <div>Giấy CN ĐKDN số: 0311828036</div>
                    <div>do Sở Kế hoạch và Đầu tư TP.HCM cấp ngày 11/6/2012,</div>
                    <div>sửa đổi lần thứ 21, ngày 04/10/2019</div>
                    <div>Số điện thoại: 1900 2042</div>
                    <div>Email: info@now.vn</div>
                    <div className="mt-3">
                        <img style={{width:"177px"}} src="https://www.now.vn/app/assets/img/gov_seals.jpg?c3d95a3d6c29919ae2c73a4a646841de"/>
                    </div>
                </div>
            </div>
        </div>
    );
}