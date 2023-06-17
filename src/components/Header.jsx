import React from 'react';
import logo from '../assets/logo.png';
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import {ThemeContext} from "../context/ThemeContext.jsx";

const Header = () => {
    // const [toggle, setToggle] = React.useState(false)
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        <div className="flex items-center p-3">
            <img src={logo} alt="logo" width={60} height={60} />
            <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
                <HiOutlineMagnifyingGlass />
                <input type="text" placeholder="Search" className="px-2 bg-transparent outline-0"/>
            </div>
            <div>
                {theme === 'light' ? (
                    <HiSun className="text-[35px] bg-slate-200 rounded-full p-2 mr-1 cursor-pointer"
                           onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}}/>
                ): (
                    <HiMoon className="text-[35px] bg-slate-200 rounded-full p-2 mr-1 cursor-pointer"
                            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}}/>
                )}
            </div>
        </div>
    )
}

export default Header;
