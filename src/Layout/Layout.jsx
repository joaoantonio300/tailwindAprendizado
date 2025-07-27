import React from 'react'
import SearchBar from '../Components/SearchBar';
import NavBar from '../Components/NavBar';

const Layout = ({ children, title, subtitle }) => {
    return (
    <>
    <div className=" bg-[#FF0000] flex flex-col justify-center items-center gap-10 font-poppins">  
    <header className="text-white flex flex-col gap-9 w-[95%] ">
          <div className=" flex items-center w-[100%] justify-center mt-2">
            <SearchBar/>
          </div>
          <div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xs font-light">
              {subtitle}
            </p>
          </div>
    </header>
    <section className="bg-white w-[100%] rounded-tl-[50px] rounded-tr-[50px]">
        {children}
     </section>
    </div>
      <NavBar/>
    </>
  )
}

export default Layout