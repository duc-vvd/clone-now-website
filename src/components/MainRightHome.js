import React from 'react';
import './MainRightHome.css';
import Card from './Card';

const foods = [
    {imgUrl: "https://images.foody.vn/res/g96/954855/prof/s280x175/foody-upload-api-foody-mobile-bep-co-tam-200203092637.jpg", title: "Cơm rang", price: "34.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g80/793314/prof/s280x175/foody-upload-api-foody-mobile-thu-hien-jpg-181102160401.jpg", title: "Cơm tám văn phòng", price: "35.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g88/879466/prof/s280x175/foody-upload-api-foody-mobile-chay-quan-190110171818.jpg", title: "Bún đậu mắm tôm", price: "40.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g31/300018/prof/s280x175/foody-mobile--963b206c6640c941f72-754-636422102341347257.jpg", title: "Chân gà bay online", price: "40.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g71/703695/prof/s280x175/foody-upload-api-foody-mobile-ga-tan-jpg-180830134727.jpg", title: "Bánh cuốn và gà tần", price: "45.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g29/285235/prof/s280x175/foody-mobile-q-jpg-680-636123806180557663.jpg", title: "Bánh tráng Sài Gòn", price: "37.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g91/904681/prof/s280x175/foody-upload-api-foody-mobile-thien-an-190828095145.jpg", title: "Gà mẹt", price: "39.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g90/896698/prof/s280x175/foody-upload-api-foody-mobile-133-190321113923.jpg", title: "Bún đậu mẹt", price: "25.000 VNĐ"},
    {imgUrl: "https://images.foody.vn/res/g73/725528/prof/s280x175/foody-upload-api-foody-mobile-ava-19-191230092142.jpg", title: "Gà rán", price: "55.000 VNĐ"},
];
export default (props) => {
    return (
        <div className="main-right-home mt-5">
            <div className="p-4">
                <div className="mb-4 font-weight-bold">Bán chạy</div>
                <div className="row" >
                    {foods.map((food) => <div className="col-sm-12 col-md-6 col-xl-4">
                        <Card food={food}/>
                    </div>)}
                </div>
                <div className="font-weight-bold text-center">Xem thêm</div>
            </div>
        </div>
    );
}