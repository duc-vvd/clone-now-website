import React from 'react';
import Food from '../components/Food';

const foods = [
    { imgUrl: "https://images.foody.vn/res/g1/9247/prof/s280x175/foody-mobile-45564654-jpg-313-636127521466786573.jpg", title: "Cafe trứng", price: "55.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g26/252881/prof/s280x175/foody-upload-api-foody-mobile-gongcha-190624155950.jpg", title: "Trà sữa Gong Cha", price: "34.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g8/70327/prof/s280x175/foody-upload-api-foody-mobile-5-190624155328.jpg", title: "Ding tea", price: "39.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g27/266599/prof/s280x175/foody-mobile-2818-jpg-823-636068665550272100.jpg", title: "Trà sữa Bobapop", price: "42.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g27/269584/prof/s280x175/foody-mobile-tra-sua-chago-chan-t-820-636076525844526208.jpg", title: "Cha go tea", price: "46.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g66/657752/prof/s280x175/foody-mobile-roy-jpg-783-636298476028062695.jpg", title: "Royaltea", price: "34.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g81/805136/prof/s280x175/foody-upload-api-foody-mobile-phuc-long-jpg-181122180526.jpg", title: "Phúc Long coffee", price: "42.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g78/770823/prof/s280x175/foody-upload-api-foody-mobile-img_7714-191202170241.jpg", title: "Tiger sugar delivery", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g6/51714/prof/s280x175/foody-upload-api-foody-mobile-960x550-200206092649.jpg", title: "Trà sữa Tocotoco", price: "40.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g5/45267/prof/s280x175/foody-upload-api-foody-mobile-551181e6898573db2a94-200422101450.jpg", title: "Trà sữa Feeling tea", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g73/726012/prof/s280x175/foody-upload-api-foody-mobile-alley-jpg-180321161335.jpg", title: "Trà sữa Đài Loan", price: "47.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g72/710938/prof/s280x175/foody-upload-api-foody-mobile-foody-mobile-heyt-jp-180521122514.jpg", title: "Trà sữa Heytea", price: "33.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g24/231978/prof/s280x175/foody-mobile-d11-jpg-718-636257778003291656.jpg", title: "CoCo fresh tea", price: "39.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g24/238091/prof/s280x175/foody-mobile-45-jpg-161-635996853339448719.jpg", title: "Urban Station Coffee Takeaway", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g2/12504/prof/s280x175/foody-upload-api-foody-mobile-cong-190624101353.jpg", title: "Cộng Caphe", price: "45.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g66/652833/prof/s280x175/foody-upload-api-foody-mobile-12-190620141811.jpg", title: "Cheese Coffee", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g4/35338/prof/s280x175/foody-mobile--5b365d34835d7199f85.jpg", title: "Caztus Iceblended", price: "39.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g21/201713/prof/s280x175/foody-upload-api-foody-mobile-14-190620154706.jpg", title: "Đen đá cafe", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g68/673543/prof/s280x175/foody-upload-api-foody-mobile-40a-190508162534.jpg", title: "Trà sữa R&B Tea", price: "48.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g10/93932/prof/s280x175/foody-mobile-bon-bon-mb-jpg-144-636017608661919382.jpg", title: "Trà sữa Bòn Bon", price: "32.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g29/283536/prof/s280x175/foody-mobile-12-jpg.jpg", title: "Trà Đài Loan", price: "49.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g5/43301/prof/s280x175/foody-upload-api-foody-mobile-seatalk_img_15825268-200224140216.jpg", title: "The Coffee Bean & Tea Leaf", price: "42.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g67/665414/prof/s280x175/foody-upload-api-foody-mobile-hm1-190814174108.jpg", title: "Mato House-Taiwan Healthy Tea", price: "56.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g17/168451/prof/s280x175/foody-mobile-29fe28b4a66d4933107c.jpg", title: "The Chai Cafe", price: "39.000 VNĐ" },
];
export default (props) => {
    return (
        <Food foods={foods} title="Đồ uống"/>
    );
}