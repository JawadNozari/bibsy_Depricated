import React from 'react';
import Theme from './Theme';
import SignInWidget from './SignIn_Widget';
import Navbar from './Navbar';

const Main =()=> {
    return (

     <div className='flex justify-center items-center h-screen'>
        <Theme/>
        {/* <SignInWidget/> */}
        <Navbar />
     </div>
    );
}

export default Main;