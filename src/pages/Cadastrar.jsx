import Layout from "../Layout/Layout";

const title="Cadastrar";
const subtitle="Cadastre aqui seu produto!"
const items = [
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "45.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola Sabor cola Sabor cola Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
  { title: "Refrigerante", desc: "Sabor cola", price: "01.00", categoria: "Bebida" },
  { title: "Prato", desc: "Com batatas", price: "05.00", categoria: "Comida" },
];


const Cadastrar = () => {
  return (
    <>
            <Layout
        title={title}
        subtitle={subtitle}
      >
        <div className="flex justify-center h-[80vh]">
            <form className="flex flex-col justify-center items-start w-[95%] gap-6"  action="post">
                <label>
                    <h1>Nome</h1>
                    <input required type="text" name="name" id=""/>
                </label>
                <label>
                    <h1>Categoria</h1>
                    <select required name="categoria" id="">
                        <option value="">Escolha a categoria desejada</option>
                        <option value="1">
                            Bebida
                        </option>
                        <option value="1">
                            Lanches
                        </option>
                        <option value="1">
                            Combo
                        </option>
                    </select>
                </label>
                <label>
                <h1>Descrição</h1>
                <input type="text" name="description" id="" />
                </label>
                <label>
                    <h1>Preço</h1>
                    <input required type="number" name="price" id=""/>
                </label>
                <div className="w-full flex justify-center">
                <button className="bg-black text-white rounded-[20px] p-2">Cadastrar</button>
                </div>
            </form>
        </div>
      </Layout>
    </>
  )
}

export default Cadastrar