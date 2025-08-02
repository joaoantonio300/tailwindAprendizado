import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useInsertDocument } from '../hooks/useInsertDocument';
import Layout from "../Layout/Layout";


const title="Cadastrar";
const subtitle="Cadastre aqui seu produto!"

const Cadastrar = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [formError, setFormError] = useState("");

    const {user} = useAuthValue();

    const {insertDocument, response} = useInsertDocument("posts");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError("");

        if(formError) return

        await insertDocument({
            name,
            image,
            category,
            description,
            price,
            uid: user.uid,
        })

        navigate("/");
    }

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
                    <input required type="text" name="name" id="" onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    <h1>Categoria</h1>
                    <select required name="categoria" id="" onChange={(e) => setCategory(e.target.value)}>
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
                <input type="text" name="description" id="" onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label>
                    <h1>Preço</h1>
                    <input required type="number" name="price" id="" onChange={(e) => setPrice(e.target.value)}/>
                </label>
                <div className="w-full flex justify-center">
                {!response.loading && <button className="bg-black text-white rounded-[20px] p-2">Cadastrar</button>}
                {response.loading && (<button disabled className="btn">Aguarde...</button>)}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
                </div>
            </form>
        </div>
      </Layout>
    </>
  )
}

export default Cadastrar