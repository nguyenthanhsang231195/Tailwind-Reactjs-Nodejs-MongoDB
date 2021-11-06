import React from 'react'
import { Link } from 'react-router-dom'
import productData from '../Data/data'
import formatCurrency from '../util'

export default function CategoryScreen() {
    return (
<div className="relative w-4/5 m-auto text-2xl"> 
    {/* Filter */}
    <div className="relative flex w-full h-auto my-2">
        <div className="flex-1">
            <select className="relative p-6 mr-6 border border-gray-600 bg-black text-white">
                <option disabled selected> Lựa màu: </option>
                <option> White </option>
                <option> Black </option>
                <option> Red </option>
                <option> Blue </option>
                <option> Yellow </option>
                <option> Green </option>
            </select>
        </div>
        <div className="flex-1">
            <select className="relative p-6 mr-6 border border-gray-600 bg-black text-white">
                <option disabled selected> Kích cỡ: </option>
                <option> S </option>
                <option> M </option>
                <option> L </option>
                <option> XL </option>
            </select>
        </div>
        <div className="flex-1">
            <select className="relative p-6 mr-6 border border-gray-600 bg-black text-white">
                <option disabled selected> Giá cả: </option>
                <option> Mắc nhất </option>
                <option> Rẻ Nhất </option>
            </select>
        </div>
    </div>
    {/* Product */}
    <div className="relative w-full h-auto m-auto py-2">
        <div className="relative justify-center items-center text-center">
            <h2 className="text-4xl font-extrabold font-sans text-gray-600 uppercase"> Ưa chuộng </h2>
        </div>
        <div className="relative block">
            <ul className="relative grid grid-cols-2 gap-4 w-full md:grid-cols-4 lg:grid-cols-6">
            {productData.getAllProducts().map((product) => 
                <li key={product._id}>
                    <div className="relative justify-center items-center text-center">
                    <Link to={`/product/${product.slug}`} className="text-2xl text-black font-bold">
                        <img src={product.image_main} alt={product.name} />
                    </Link>
                    <Link to={`/product/${product.slug}`} className="text-2xl text-black font-bold">
                        <h2 className="my-2"> {product.name} </h2>
                    </Link>
                        <div className="flex justify-end items-center text-center">
                            <h3 className="text-xl mr-2 md:text-2xl"> {formatCurrency(product.price)} </h3>
                            <h4 className="text-red-600 line-through text-lg"> {formatCurrency(product.pricesell)} </h4>
                        </div>
                    </div>
                </li>
            )}
            </ul>
        </div>
    </div>
</div>
    )
}
