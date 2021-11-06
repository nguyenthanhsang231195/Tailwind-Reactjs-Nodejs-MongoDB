import React from 'react';
import Carousel from 'react-elastic-carousel';
import productData from '../Data/data';
import policy from '../Data/policy';
import { Link } from 'react-router-dom';
import formatCurrency from '../util';

export default function HomeScreen() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 992, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
<div className="relative w-full m-auto bg-white text-black">
    {/* Carousel */}
    <div className="relative w-full m-auto py-2">
        <Carousel enableAutoPlay autoPlaySpeed={5000}>
            <div className="relative w-full h-auto my-2">
                <img src="/images/Banner-1.jpg" alt="" className="relative w-full" />
            </div>
            <div className="relative w-full h-auto my-2">
                <img src="/images/Banner-2.jpg" alt="" className="relative w-full" />
            </div>
            <div className="relative w-full h-auto my-2">
                <img src="/images/Banner-3.jpg" alt="" className="relative w-full" />
            </div>
            <div className="relative w-full h-auto my-2">
                <img src="/images/Banner-4.jpg" alt="" className="relative w-full" />
            </div>
        </Carousel>
    </div>
    {/* Policy */}
    <div className="relative flex w-4/5 h-auto m-auto">
        {policy.map((item, index) =>
            <div key={index} className="relative flex-1 justify-center items-center text-center bg-gray-800 text-gray-100 rounded-lg border border-pink-600">
                <div className="my-1">
                    <i className={item.icon}></i>
                </div>
                <div className="my-1">
                    <h3> {item.name} </h3>
                </div>
                <div className="my-1 hidden md:block">
                    <h4> {item.description} </h4>
                </div>
            </div>
        )}
    </div>
    {/* Bestsellers   */}
    <div className="relative w-4/5 h-auto m-auto py-2">
        <div className="relative justify-center items-center text-center">
            <h2 className="text-4xl font-extrabold font-sans text-red-600 uppercase"> Siêu hot </h2>
        </div>
        <div className="relative block">
            <ul className="relative grid w-full">
            <Carousel enableAutoPlay autoPlaySpeed={6000} breakPoints={breakPoints}>
            {productData.getAllProducts().map((product) => 
                <li key={product._id} className="relative w-96">
                    <div className="relative justify-center items-center text-center w-full">
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
            </Carousel>
            </ul>
        </div>
    </div>
    {/* Product */}
    <div className="relative w-4/5 h-auto m-auto py-2">
        <div className="relative justify-center items-center text-center">
            <h2 className="text-4xl font-extrabold font-sans text-gray-600 uppercase"> Ưa chuộng </h2>
        </div>
        <div className="relative block">
            <ul className="relative grid grid-cols-2 gap-4 w-full sm:grid-cols-3 md:grid-cols-5">
            {productData.getProducts(10).map((product) => 
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
        <div className="relative justify-center items-center text-center">
            <Link to="/category" className="animate-pulse">
                <span className="text-pink-600 text-4xl"> Xem thêm </span>
            </Link>
        </div>
    </div>
    {/* Banner */}
    <div className="relative w-4/5 h-auto m-auto py-2">
        <img src="/images/BannerSale.png" alt="" className="relative w-full" />
    </div>
</div>
    )
}
