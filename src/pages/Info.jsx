
import { PrefetchPageLinks } from "react-router-dom";
import Layout from "../Layout/Layout";
import NavBar from "../Components/NavBar";

const Info = () => {
  return (
    <div className="h-[100vh] flex justify-center">
        <div className="flex flex-col items-center gap-10 bg-[#FF0000]">
          <div className="flex flex-col items-center gap-5 text-white w-[80vw] mt-9 ">
            <h1 className="font-bold text-4xl">Sobre Nós</h1>
            <div className="mt-9 flex flex-col font-extralight text-xl gap-10">
                <p className="w-[60%]">Somos um grupo responsável por trazer o <span className="font-extrabold">melhor</span></p>
                <div className="flex items-end justify-end">
                <p className="text-right w-[70%]">Responsáveis por um sistema que traga o  <span className="font-extrabold">conforto</span> que você merece</p>
                </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white w-[100vw] rounded-tl-[50px] rounded-tr-[50px] h-[80%]">
            <div className="w-[80vw]">
              <h1 className="font-bold text-4xl w-[80%]leading-[0.9] mt-9">Quer apresentar seus produtos de maneira inovadora?
              </h1>
              <div className="mt-9">
              <p className="font-">
              Me chamo João, estou aqui para te ajudar no mercado de trabalho. Venha crescer conosco!!!
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                <li className="p-2 bg-black text-white w-[40%] text-center rounded-[20px]">Celular</li>
                <li className="p-2 bg-black text-white w-[40%] text-center rounded-[20px]">Email</li>
                <li className="p-2 bg-black text-white w-[40%] text-center rounded-[20px]">Instagram</li>
                <li className="p-2 bg-black text-white w-[40%] text-center rounded-[20px]">Linkedin</li>
              </ul>
              </div>
            </div>
            <NavBar/>
          </div>
        </div>
    </div>
  )
}

export default Info