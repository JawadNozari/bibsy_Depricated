import React from 'react';
import Theme from './Theme';

import SignInWidget from './SignIn_Widget';
import MainContainer from './MainContainer';
import MainNavbar from './MainNavbar';
import Navbar from './Navbar';
import RegisterBook from './RegisterBook';


const Main =()=> {
    return (

     <div className='flex justify-center content-center h-screen touch-none'>
        <Theme/>
        {/* <MainContainer page='list'/> */}
        {/* <MainNavbar isBig={true}/>
        <Navbar/> */}
        <RegisterBook />

     </div>
    );
}

export default Main;