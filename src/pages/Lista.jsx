import React from "react";
import Drink from "../assets/drink.png";
import Plate from "../assets/plate.png";
import Layout from "../Layout/Layout";

const title="Olá, Bem vindo";
const subtitle="Escolha seu pedido entre bebidas, lanches e combos!"
const items = [
  { img: Drink, title: "Refrigerante", desc: "Sabor cola", price: "01.00" },
  { img: Plate, title: "Prato", desc: "Com batatas", price: "05.00" },
];

const Lista = () => {
  return (
    <>
      <Layout
        title={title}
        subtitle={subtitle}
      >
        <section className="bg-white w-[100%] rounded-tl-[50px] rounded-tr-[50px]">
          <ul className="font-bold flex justify-around mt-9">
            <li className=" relative text-red-600">
              Bebidas
              <span className="absolute bottom-0 left-0 h-[15%] rounded-2xl bg-red-500 w-[60%]"></span>
            </li>
            <li>Lanches</li>
            <li>Combos</li>
          </ul>

          <div className="flex-wrap mt-10 w-[100%] flex flex-row justify-around">
            <div className="flex flex-col  rounded-[20%] justify-center items-center shadow-md w-[32%]">
              <img className="h-[7em]" src={Drink} alt="" />
              <h3 className="font-poppins text-[10px]">Refrigerante</h3>
              <p className="text-[7px]">Sabor cola</p>
              <p className="text-[8px] mr-12">$ 01.00</p>
            </div>
            {/* {items.map((item, i) => (
               <div key={i} className="flex flex-col  rounded-[20%] justify-center items-center shadow-md w-[32%]">
               <img className="h-[7em]" src={item.img} alt="" />
               <h3 className="font-poppins text-[10px]">{item.title}</h3>
               <p className="text-[7px]">{desc}</p>
               <p className="text-[8px] mr-12">$ {price}</p>
             </div>
            ))} */}
          </div>
        </section>
      </Layout>
        
    </>
  );
};

export default Lista;
