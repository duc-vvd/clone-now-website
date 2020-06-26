import React from 'react';
import './MainRightHome.css';
import Card from './Card';

const foods = [
    {imgUrl: "https://images.foody.vn/res/g93/925026/prof/s280x175/foody-upload-api-foody-mobile-images-190916172718.jpg", title: "Gỏi cuốn", price: "19000"},
    {imgUrl: "https://images.foody.vn/res/g77/763225/prof/s280x175/foody-upload-api-foody-mobile-83-jpg-180730162258.jpg", title: "Mì ý", price: "45000"},
    {imgUrl: "https://images.foody.vn/res/g95/946570/prof/s280x175/foody-upload-api-foody-mobile-ghghgh-190826092017.jpg", title: "Bông lan trứng", price: "41000"},
    {imgUrl: "https://images.foody.vn/res/g79/785456/prof/s280x175/foody-upload-api-foody-mobile-32-jpg-181110094922.jpg", title: "Bún đậu", price: "39000"},
    {imgUrl: "https://images.foody.vn/res/g73/727720/prof/s280x175/foody-upload-api-foody-mobile-17-jpg-181213105857.jpg", title: "Hủ tiếu", price: "25000"},
    {imgUrl: "https://images.foody.vn/res/g90/892348/prof/s280x175/foody-upload-api-foody-mobile-hjhjhjhjhj-190807174107.jpg", title: "Gà nướng", price: "75000"},
    {imgUrl: "https://images.foody.vn/res/g1/3053/prof/s280x175/foody-upload-api-foody-mobile-c61ea031233fde61872e-200617151455.jpg", title: "Bánh mì que", price: "22000"},
    {imgUrl: "https://images.foody.vn/res/g76/757437/prof/s280x175/foody-upload-api-foody-mobile-23-200421164759.jpg", title: "Vịt quay Jacky", price: "64000"},
    {imgUrl: "https://images.foody.vn/res/g19/183428/prof/s280x175/foody-mobile-foody-mi-hen-tu-thuy-599-635824165376882507.jpg", title: "Mì hến", price: "28000"}
];
export default (props) => {
    return (
        <div className="main-right-home mt-5">
            <div className="p-4">
                <div className="mb-4 font-weight-bold">Bán chạy</div>
                <div className="row" >
                    {foods.map((food, index) => <div className="col-sm-12 col-md-6 col-xl-4" key={index}>
                        <Card food={food}/>
                    </div>)}
                </div>
                <div className="font-weight-bold text-center">Xem thêm</div>
            </div>
        </div>
    );
}