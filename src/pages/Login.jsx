import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dados = JSON.parse(localStorage.getItem("user-bjj"));

    if (!dados || form.email !== dados.email || form.senha !== dados.senha) {
      alert("E-mail ou senha inválidos!");
    } else {
      alert("Login feito com sucesso!");
      navigate("/profile");
    }


    setForm({ email: "", senha: "" });
  }

  return (
    <div className="flex items-center font-display justify-start flex-col pt-5 min-h-screen bg-[#F8F8F8]">
      <h1 className="text-5xl font-bold pt-10">BJJ Atlas</h1>
      <h3 className="mb-8 text-gray-600">
          Domine a arte suave
        </h3>
      <div className="flex flex-col items-center bg-[#FFFAFA] py-10 px-10 border border-[#C6C6C6] shadow-lg rounded-3xl">
        <h2 className=" font-semibold text-gray-800 text-2xl">
        Bem-vindo(a) de Volta!
        </h2>
        <h3 className="mb-8 text-gray-600">
        Entre e continue sua jornada!
        </h3>
        <form
          className="flex justify-center flex-col w-70 "
          onSubmit={handleSubmit}
        >
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-3 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-20 -translate-y-2/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              E-mail
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              value={form.senha}
              onChange={handleChange}
              className="peer w-full border-2 border-gray-300 rounded-xl bg-transparent mb-5 px-3 py-2.5 text-gray-800 focus:border-[#d11e1eff] focus:shadow-sm focus:outline-none"
            />
            <label
              htmlFor="senha"
              className="absolute left-3 top-20 -translate-y-2/2 text-gray-500 text-base bg-[#FFFAFA] px-1 transition-all duration-200 ease-in-out
               peer-placeholder-shown:top-5.5 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-sm peer-focus:text-[#d11e1eff]
               peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500"
            >
              Senha
            </label>
          </div>
          <button

            type="submit"
            className="p-2.5 mb-2.5 rounded-xl cursor-pointer hover:bg-red-500 transition-all duration-300 ease-in-out font-medium text-md text-white bg-[#d11e1eff]"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
