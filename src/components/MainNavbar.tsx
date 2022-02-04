 import React, {useEffect, useState} from 'react';



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
        <div className="bg-adminSidebar w-[80vw] h-[15vh] fixed  right-10 top-5 items-start flex justify-center rounded-2xl overflow-hidden">
            <div className="bg-green-200 w-[20%] h-[100%] rounded-2xl ">
                <label ></label>
                <p>Members</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
export default MainNavbar;