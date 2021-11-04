import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
<nav className="relative flex justify-between items-center text-center">
    <div className="ml-4 sm:block hidden">
        <Link to="/" className="mx-1"> 
            <i className="fas fa-home text-white-600"></i> ||
        </Link>
        <Link to="/category" className="mx-1 text-2xl"> Danh mục || </Link>
        <Link to="/policy" className="mx-1 text-2xl"> Chính sách || </Link>
        <Link to="/sign-in" className="mx-1 text-2xl"> Đăng nhập ||</Link>
        <Link to="/cart" className="mx-1 text-2xl"> 
            <i className="fas fa-shopping-cart text-white-600"></i>  
        </Link>
    </div>

    <div className="relative w-52 h-auto sm:block hidden">
        <Link to="/"> 
            <img src="/images/Logo.png" alt="" className="w-full" />
        </Link>
    </div>

    <div class="relative text-gray-600 mx-4 sm:inline-flex hidden">
        <input 
            type="search" 
            name="serch" 
            placeholder="Tìm kiếm..." 
            className="bg-white h-14 px-12 rounded-full text-lg focus:outline-none placeholder-gray-600" />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <i className="fas fa-search h-4 w-4 mr-6 fill-current"></i>
        </button>
    </div>
</nav>
    )
}
