 import React, {useEffect, useState} from 'react';
 import {FiUsers} from 'react-icons/fi';
 import {ImBooks} from 'react-icons/im';
 import {SiBookstack} from 'react-icons/si';
 import {RiErrorWarningLine} from 'react-icons/ri';
 import {RiDashboardLine} from 'react-icons/ri';







 const MainNavbar = (/*props*/) => {

//     const [] = useEffect<>();
    
//     useEffect(() => {
//         //fetching data
//        //fakeUseFetch
//        //${props.mainColor}
//        //${props.listColor}
//        setData(list);
//        setTheadStyle(`bg-${props.mainColor} h-16 text-3xl text-left text-white`);
//        setTrStyle(`w-screen odd:bg-white even:bg-${props.listColor} h-16`);
//        setTdStyle('p-3');

//        if (props.typeOf === 'member') {
//            setIsMemberType(true);
//        }
//        else if (props.typeOf === 'book') {
//            setIsMemberType(false);
//        }
//        else {
//            setIsMemberType(null);
//        }

//    }, []);
   
    return (
        <div className=" w-[75vw] h-[15vh] fixed  right-10 top-5 items-start flex justify-center rounded-2xl overflow-hidden">
            
            <div className="navbar-options bg-blue-500">
            <label className=""><RiDashboardLine color='white'size={'3rem'}/></label>
                <p className="sidebar-text text-3xl">
                Dashboard
                </p>
            </div>

            <div className="navbar-options bg-purple-700">
            <label className=""><FiUsers color='white'size={'3rem'}/></label>
                <p className="sidebar-text text-3xl">Members</p>
            </div>
            
            <div className="navbar-options bg-yellow-500">
            <label className=""><ImBooks color='white'size={'3rem'}/></label>
                <p className="sidebar-text text-3xl">Books</p>
            </div>
            
            <div className="navbar-options bg-green-700">
            <label className=""><SiBookstack color='white'size={'3rem'}/></label>
                <p className="sidebar-text text-3xl">
                Returned
                </p>
            </div>
            
            <div className="navbar-options bg-red-700">
            <label className=""><RiErrorWarningLine color='white'size={'3rem'}/></label>
                <p className="sidebar-text text-xl">
                Not Returned
                </p>
            </div>
            
        </div>
    );
}
export default MainNavbar;