import React from 'react';
import { withRouter } from 'react-router';
import productData from '../Data/data';
import formatCurrency from '../util';

function ProductScreen(props) {

    const product = productData.getProductBySlug(props.match.params.slug);

    return (
<div className="relative w-4/5 m-auto py-8">
    <div className="relative w-full grid grid-cols-10 gap-4">
        {/* Image */}
        <div className="relative col-span-7 md:col-span-6">
            <div className="relative w-3/4">
                <img 
                    src={product.image_main} 
                    alt={product.name} 
                    className="relative w-full border-solid border-2 border-pink-500 shadow-md" />
            </div>
        </div>
        {/* Info */}
        <div className="relative col-span-3 md:col-span-4">
            <div className="relative w-full">
                <h1 className="text-4xl text-center font-bold"> {product.name} </h1>
                <div className="flex justify-center items-center gap-4">
                    <h2 className="text-3xl font-bold"> {formatCurrency(product.price)} </h2>
                    <h2 className="text-2xl text-red-600 line-through"> {formatCurrency(product.pricesell)} </h2>
                </div>
                <hr className="h-4 border-gray-600 text-2xl" />
                <div className="my-8 text-3xl font-bold">
                    Danh mục: <span className="font-light"> {product.category} </span> 
                </div>
               <div className="my-8">
                   <label className="text-3xl font-bold"> Lựa màu: </label>
                    <select className="relative p-4 w-48 border border-gray-600 bg-black text-white">
                        <option> White </option>
                        <option> Black </option>
                        <option> Red </option>
                        <option> Blue </option>
                        <option> Yellow </option>
                        <option> Green </option>
                    </select>
               </div>
               <div className="my-8">
                    <label className="text-3xl font-bold"> Kích cỡ: </label>
                    <select className="relative p-4 w-48 border border-gray-600 bg-black text-white">
                        <option> S </option>
                        <option> M </option>
                        <option> L </option>
                        <option> XL </option>
                    </select>
               </div>
               <div className="relative w-full m-auto text-center">
                    <button class="relative w-80 h-20 ring-2 ring-purple-800 ring-offset-1 bg-black text-white"> Click </button>
               </div>
            </div>
        </div>
    </div>   
</div>
    )
}

export default withRouter(ProductScreen);
