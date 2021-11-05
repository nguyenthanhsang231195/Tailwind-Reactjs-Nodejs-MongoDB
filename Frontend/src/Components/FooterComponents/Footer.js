import React from 'react'

export default function Footer() {
    return (
<div className="relative w-full m-auto grid grid-cols-4 gap-4 bg-yellow-300 px-8">
    <div className="relative border-solid border-4 border-light-blue-500">
        <h1 className="text-center uppercase text-black text-2xl font-bold"> Liên hệ với chúng tôi </h1>
        <ul className="leading-10">
            <li className="text-2xl truncate"> <i className="fas fa-address-card"></i>: 21 Thép Mới, P.12, Q.Tân Bình, TP.HCM </li>
            <li className="text-2xl truncate"> <i className="fas fa-phone-alt"></i>: 0797080378 </li>
            <li className="text-2xl truncate"> <i className="fas fa-envelope"></i>: nguyenthanhsang231195@gmail.com</li>
            <li className="text-2xl truncate">
                <p> <i className="fas fa-briefcase"></i>: </p>  
                <p> Thứ 2 - Thứ 6: 8:00AM - 9:00PM </p>
                <p> Thứ 7 - Chủ Nhật: 9:00AM - 8:00PM </p>
            </li>
        </ul>
    </div>

    <div className="relative border-solid border-4 border-light-blue-500">
        <h1 className="text-center uppercase text-black text-2xl font-bold"> Hướng dẫn - Hỗ trợ </h1>
        <ul className="leading-10 justify-center items-center text-center">
            <li className="text-2xl"> Hướng dẫn đặt hàng </li>
            <li className="text-2xl"> Thanh toán - Giao nhận </li>
            <li className="text-2xl"> Phương thức đổi trả </li>
            <li className="text-2xl"> Giỏ hàng </li>
        </ul>
    </div>

    <div className="col-start-3 col-span-2">
        <div className="grid grid-rows-2">
            <div>
                <h1 className="text-center uppercase text-black text-2xl font-bold"> Kết nối với chúng tôi: </h1>
                <div className="relative justify-center items-center text-center">
                    <ul className="leading-10 inline-flex">
                        <li> <i className="fab fa-facebook-f text-4xl"></i> </li>
                        <li> <i className="fab fa-youtube text-4xl"></i> </li>
                        <li> <i className="fab fa-instagram-square text-4xl"></i> </li>
                        <li> <i className="fab fa-twitter text-4xl"></i> </li>
                    </ul>
                </div>  
            </div>

            <div className="justify-center items-center text-center">
                <h2 className="text-center uppercase text-black text-2xl font-bold"> Đăng ký khuyến mãi: </h2>
                <div className="inline-flex">
                    <input 
                        type="email" 
                        name="gmail" 
                        placeholder="Địa chỉ Gmail của bạn" 
                        className="bg-white h-20 px-10 rounded text-2xl focus:outline-none placeholder-gray-600 z-10" />
                    <button className="w-32 h-20 bg-gray-700 text-2xl text-white"> 
                        <p className="h-full text-center mt-5"> Đăng ký </p> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}
