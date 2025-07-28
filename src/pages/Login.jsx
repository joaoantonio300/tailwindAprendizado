import NavBar from "../Components/NavBar";
import BackGround from "../assets/backGround.png";

const Login = () => {
  return (
        <div className="overflow-hidden flex flex-col items-center gap-10 h-[100vh] bg-[#FF0000]">
          <div className="flex flex-col items-center gap-5 text-white mt-9 w-[100vw]">
            <h1 className="font-bold text-4xl">Login</h1>
            <p>Apenas para administradores</p>
            <div className="mt-9 flex flex-col font-extralight text-xl gap-10">
            </div>
              <form className="flex flex-col gap-5 w-[95%] items-center">
                <label>
                  <span className="text-[15px] font-bold">Email</span>
                  <input className="!shadow-red-800 bg-white" required type="email" name="" id="" />
                </label>
                <label className="shadow-none">
                  <span
                  className="text-[px] font-bold">Senha</span>
                  <input required className="!shadow-red-800 bg-white" type="password" name="" id="" />
                </label>
                <input className="bg-black text-white rounded-[20px] w-[50%] p-2" type="button" value="Entrar"/>
              </form>
              <div className="sm:hidden w-[140vw] flex justify-center items-center">
                <img className="" src={BackGround} alt="" />
              </div>
        </div>
    </div>
  )
}

export default Login