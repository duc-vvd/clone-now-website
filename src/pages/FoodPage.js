import React from 'react';
import Food from '../components/Food';

const foods = [
    { imgUrl: "https://images.foody.vn/res/g5/45097/prof/s280x175/foody-upload-api-foody-mobile-3-200624103422.jpg", title: "Gà rán Kuccu", price: "44.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g16/154875/prof/s280x175/foody-upload-api-foody-mobile-foody-upload-api-foo-190621094844.jpg", title: "Cơm niêu Singapore", price: "66.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g1/9298/prof/s280x175/foody-mobile-3-jpg-831-635857700342239766.jpg", title: "Gimbab Hàn Quốc", price: "35.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g17/162351/prof/s280x175/foody-upload-api-foody-mobile-avar51-190801095231.jpg", title: "Cơm nấm", price: "43.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g1/6534/prof/s280x175/foody-upload-api-foody-mobile-pizza-hut-190926093201.jpg", title: "Pizza Hut", price: "67.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g17/163139/prof/s280x175/foody-mobile-8gg0ppoe-jpg-659-635787943860928616.jpg", title: "Gà xào phô mai", price: "82.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g94/938512/prof/s280x175/foody-upload-api-foody-mobile-16-190711170924.jpg", title: "Cơm tấm", price: "28.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g65/645643/prof/s280x175/foody-upload-api-foody-mobile-unnamed-200528092228.jpg", title: "Vit quay Bắc Kinh", price: "95.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g3/27009/prof/s280x175/foody-mobile-pho-cuon-jpg-231-635932901870146427.jpg", title: "Phở cuốn", price: "45.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g20/193590/prof/s280x175/foody-upload-api-foody-mobile-cha-ca-ha-thanh-nguy-180824100129.jpg", title: "Chả cá Hà Thành", price: "30.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g1/6616/prof/s280x175/foody-mobile-ao3-jpg-673-635842139826681108.jpg", title: "Sushi Nhật Bản", price: "30.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g96/954855/prof/s280x175/foody-upload-api-foody-mobile-bep-co-tam-200203092637.jpg", title: "Cơm rang", price: "34.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g80/793314/prof/s280x175/foody-upload-api-foody-mobile-thu-hien-jpg-181102160401.jpg", title: "Cơm tám văn phòng", price: "35.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g88/879466/prof/s280x175/foody-upload-api-foody-mobile-chay-quan-190110171818.jpg", title: "Bún đậu mắm tôm", price: "40.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g31/300018/prof/s280x175/foody-mobile--963b206c6640c941f72-754-636422102341347257.jpg", title: "Chân gà bay online", price: "40.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g71/703695/prof/s280x175/foody-upload-api-foody-mobile-ga-tan-jpg-180830134727.jpg", title: "Bánh cuốn và gà tần", price: "45.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g29/285235/prof/s280x175/foody-mobile-q-jpg-680-636123806180557663.jpg", title: "Bánh tráng Sài Gòn", price: "37.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g91/904681/prof/s280x175/foody-upload-api-foody-mobile-thien-an-190828095145.jpg", title: "Gà mẹt", price: "39.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g90/896698/prof/s280x175/foody-upload-api-foody-mobile-133-190321113923.jpg", title: "Bún đậu mẹt", price: "25.000 VNĐ" },
    { imgUrl: "https://images.foody.vn/res/g73/725528/prof/s280x175/foody-upload-api-foody-mobile-ava-19-191230092142.jpg", title: "Gà rán", price: "55.000 VNĐ" },
];
export default (props) => {
    return (
        <Food foods={foods} title="Đồ ăn"/>
    );
}