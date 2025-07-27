
import Layout from "../Layout/Layout";

const title="Olá, Bem vindo";
const subtitle="Escolha seu pedido entre bebidas, lanches e combos!"

const Info = () => {
  return (
    <div>
      <Layout 
              title={title}
              subtitle={subtitle}>
        <h1>Info</h1>
      </Layout>
    </div>
  )
}

export default Info