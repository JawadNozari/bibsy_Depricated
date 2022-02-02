import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi'
import {SiBookstack} from 'react-icons/si'
import {RiErrorWarningLine} from 'react-icons/ri';

  const Navbar = () =>{
    return(
      <div className="bg-adminSidebar w-[22vw] xl:w-[16vw] h-[95%] top-[2.5vh] left-[2vw] fixed rounded-l-2xl sm:">
        <div className="grid place-items-center mb-3 pb-2">
          <label className="pt-9"><BiUserCircle color='white'size={'3rem'}/></label>
          <h1 className="text-zinc-50  pt-2 pb-2 ">Admin</h1> 
        </div>
        <hr className= "w-[75%] mx-auto" />
        <div className="grid place-items-center">  
            <a href="" className="w-[100%]">
              <div className="flex items-center text-center justify-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
                <label className="pl-5"><FiUsers color='white'size={'3rem'}/>
                </label>
                <p className="w-[50%]">
                  Dashboard
                </p>
              </div>
            </a>

            <a href="" className="w-[100%]">
              <div className="flex items-center text-center justify-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
                <label className="pl-5"><SiBookstack color='white'size={'3rem'}/></label>
                    <p className="w-[50%]">
                      Members
                    </p>
              </div>
            </a>

            <a href="" className="w-[100%]">
              <div className="flex item-center text-center justify-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
                <label className="pl-5"><SiBookstack color='white'size={'3rem'}/></label>
                    <p className="w-[50%]">
                      Books
                    </p>
              </div>
            </a>

            <a href="" className="w-[100%]">
            <div className="flex items-center text-center justify-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <label className="pl-5"><SiBookstack color='white'size={'3rem'}/></label>
                <p className="w-[50%]">
                Returned
                </p>
            </div>
            </a>

            <a href="" className="w-[100%]">
            <div className="flex items-center text-center justify-center pt-5 pb-5 text-zinc-50 hover:bg-purple-800">
            <label className="pl-5"><RiErrorWarningLine color='white'size={'3rem'}/></label>
                <p className="w-[50%]">
                Not Returned
                </p>
            </div>
            </a>
        </div>
       
      </div>
    )

  }

  export default Navbar;