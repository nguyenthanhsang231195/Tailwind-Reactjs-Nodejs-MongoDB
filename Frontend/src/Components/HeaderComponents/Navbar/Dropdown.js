import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Dropdown = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const [icon, setIcon] = useState(false);
    const showIcon = () => setIcon(!icon)

    return (
<div className="relative w-full my-2 sm:hidden block">
    <span onClick={showIcon}>
        {icon 
        ? <i className="fas fa-ban text-4xl my-1 justify-start ml-4" onClick={showSidebar}></i>
        : <i className="fas fa-align-justify text-4xl my-1 justify-start ml-4" onClick={showSidebar}/>
        }
    </span>
    

    <div className=
        {sidebar 
        ? 'fixed grid grid-rows-4 items-center text-center bg-black w-full h-auto left-0 duration-300' 
        : 'fixed grid grid-rows-4 items-center text-center bg-purple-500 bg-opacity-50 w-full h-auto -left-full duration-700'}>
        <Link to="/">
            <h2 className="text-2xl font-bold text-white my-2 uppercase"> Trang chủ </h2> 
         </Link>

        <Link to="/category">
            <h2 className="text-2xl font-bold text-white my-2 uppercase"> Danh mục </h2>
        </Link>

        <Link to="/policy">
            <h2 className="text-2xl font-bold text-white my-2 uppercase"> Chính sách </h2>
        </Link>

        <Link to="/promotion">
            <h2 className="text-2xl font-bold text-white my-2 uppercase"> Khuyến Mãi </h2> 
        </Link>

        <Link to="/sign-in"> 
            <h2 className="text-2xl font-bold text-white my-2 uppercase"> Đăng nhập </h2>     
        </Link>
    </div>
</div>
    )
}
