import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as fcIcons from  "react-icons/fc";
import * as FiIcons from  "react-icons/fi";
import * as IosIcons from  "react-icons/io5";

//Side bar data
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'User Profile',
        path: '/construction',
        icon: <BiIcons.BiUserCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/addUser',
        icon: <FiIcons.FiUserPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <FiIcons.FiLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Results',
        path: '/results',
        icon: <IosIcons.IoBarChartOutline/>,
        cName: 'nav-text'
    },
    {
        title: 'Charts',
        path: '/Charts',
        icon: <BiIcons.BiTrendingUp/>,
        //icon: <FcIcons.FcPositiveDynamic/>
        cName: 'nav-text'
    },
]