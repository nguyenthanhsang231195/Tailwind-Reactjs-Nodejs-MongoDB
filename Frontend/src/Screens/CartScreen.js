import React from 'react';

export default function CartScreen() {
    return (
<div className="relative w-4/5 m-auto py-4">
    <table className="table-fixed w-full border-2">
        <thead className="border-solid bg-black text-white border-4">
            <tr className="relative justify-center items-center text-center">
                <th className="w-1/5 border-r-4 border-l-4 border-current"> Hình Sản Phẩm </th>
                <th className="w-2/5 border-r-4 border-current"> Tên Sản Phẩm </th>
                <th className="w-1/5 border-r-4 border-current"> Giá Cả </th>
                <th className="w-1/5 border-r-4 border-current"> Số Lượng </th>
                <th className="w-1/5 border-r-4 border-current"> Xóa </th>
            </tr>
        </thead>
        <tbody className="border-dashed border-gray-400">
            <tr className="relative border-solid border-b-4 justify-center items-center text-center">
                <td className="w-1/5 border-r-4 border-l-4 border-dashed border-current">
                    <h3> Ảnh sản phẩm </h3>
                    <h4> Màu: </h4>
                    <h4> Kích cỡ: </h4>
                </td>
                <td className="w-2/5 border-r-4 border-dashed border-current"> Tên sản phẩm </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 123.000Đ </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 10 </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> X </td>
            </tr>
            <tr className="relative border-solid border-b-4 justify-center items-center text-center">
                <td className="w-1/5 border-r-4 border-l-4 border-dashed border-current">
                    <h3> Ảnh sản phẩm </h3>
                    <h4> Màu: </h4>
                    <h4> Kích cỡ: </h4>
                </td>
                <td className="w-2/5 border-r-4 border-dashed border-current"> Tên sản phẩm </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 123.000Đ </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 10 </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> X </td>
            </tr>
            <tr className="relative border-solid border-b-4 justify-center items-center text-center">
                <td className="w-1/5 border-r-4 border-l-4 border-dashed border-current">
                    <h3> Ảnh sản phẩm </h3>
                    <h4> Màu: </h4>
                    <h4> Kích cỡ: </h4>
                </td>
                <td className="w-2/5 border-r-4 border-dashed border-current"> Tên sản phẩm </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 123.000Đ </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> 10 </td>
                <td className="w-1/5 border-r-4 border-dashed border-current"> X </td>
            </tr>
        </tbody>
    </table>

    <div className="relative w-2/3 md:w-1/3 float-right my-12 border-2 border-pink-600">
        <h3 className="relative text-center my-6"> 
            <span className="border-b-4 border-red-600 uppercase"> Tóm Tắt Đơn Hàng </span>
        </h3>
    
        <div className="relative">
            <ul className="leading-10">
                <li className="flex justify-between">
                    <p> Tổng số lượng: </p>
                    <p> N Sản phẩm </p>
                </li>

                <li className="flex justify-between">
                    <p> Giá trị đơn hàng: </p>
                    <p> 456.000Đ </p>
                </li>

                <li className="flex justify-between">
                    <p> Điểm thưởng tích lũy: </p>
                    <p> N Điểm ( 1 Điểm = 1.000 Đ) </p> 
                </li>

                <li className="flex justify-center">
                    <button 
                        className="w-2/3 h-20 ring-2 
                        bg-yellow-400 ring-purple-600 ring-inset ring-opacity-50 text-gray-600 text-3xl 
                        hover:text-white hover:bg-green-600 transition duration-700" >
                        Buy Now !
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

    )
}
