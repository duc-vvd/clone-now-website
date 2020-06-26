import React from 'react';
import Food from '../components/Food';

const foods = [
    { imgUrl: "https://images.foody.vn/res/g1/361/prof/s280x175/foody-upload-api-foody-mobile-sw_banner-200623160812.jpg", title: "Kem Swensen's", price: "54.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g30/298688/prof/s280x175/foody-mobile-12-jpg-259-636195504181789687.jpg", title: "Bánh mì chảo", price: "24.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g13/124628/prof/s280x175/foody-upload-api-foody-mobile-2-200507090724.jpg", title: "Cơm cháy", price: "32.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g71/708043/prof/s280x175/foody-mobile-1-jpg.jpg", title: "Trái cây và hạt khô", price: "55.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g5/40660/prof/s280x175/foody-upload-api-foody-mobile-17-jpg-180823161556.jpg", title: "Mì Ý", price: "64.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g1/4184/prof/s280x175/foody-upload-api-foody-mobile-2-190620162755.jpg", title: "Pizza Hut", price: "87.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g10/90677/prof/s280x175/foody-upload-api-foody-mobile-dsc08933-200417111250.jpg", title: "Buzza Pizza", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g32/315865/prof/s280x175/foody-mobile-untitled-1-jpg-128-636281268691678124.jpg", title: "Oven Maru Chicken", price: "94.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g12/112334/prof/s280x175/foody-mobile-21-jpg-408-636350180419957175.jpg", title: "Kem xôi dùa", price: "62.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g10/97665/prof/s280x175/foody-mobile-as-jpg-514-636047779925864784.jpg", title: "Kem chậu cây", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g6/55577/prof/s280x175/foody-upload-api-foody-mobile-35-jpg-181129164838.jpg", title: "Kem nếp cẩm", price: "33.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g12/115037/prof/s280x175/foody-mobile-tyutyuyyu-jpg-319-635742081409736141.jpg", title: "Bánh Su kem", price: "12.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g5/49095/prof/s280x175/foody-mobile-qw0gady6-jpg-819-636390095857628840.jpg", title: "Bánh tráng Long An", price: "28.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g5/40583/prof/s280x175/foody-mobile-banh-trang-di-hong-m-804-635944364204111959.jpg", title: "Bánh tráng cuốn", price: "24.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g73/727101/prof/s280x175/foody-upload-api-foody-mobile-3-jpg-181003111403.jpg", title: "Bánh tráng lụi", price: "32.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g17/163143/prof/s280x175/foody-upload-api-foody-mobile-13-jpg-180808204148.jpg", title: "Chân gà muối sả ớt", price: "57.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g66/650858/prof/s280x175/foody-mobile-1-jpg.jpg", title: "Bánh Crepe sầu", price: "14.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g93/921963/prof/s280x175/foody-upload-api-foody-mobile-5-190531101349.jpg", title: "Chân gà rút xương", price: "64.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g103/1027254/prof/s280x175/foody-upload-api-foody-mobile-hmzz-200602090131.jpg", title: "Chuối nếp nướng", price: "39.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g68/679800/prof/s280x175/foody-mobile-heo-moi-nuong-jpg-353-636377192542111329.jpg", title: "Heo mọi nướng", price: "62.000 VNĐ" },
    
];
export default (props) => {
    return (
        <Food foods={foods} title="Đồ ăn vặt"/>
    );
}