import LoginForm from "../components/LoginForm";
import back from "../assets/flecha-atras.png";
import { Link } from "react-router-dom";
import imgForm from "../assets/imgForm.jpg";

export default function Login() {
  return (
    <main data-aos="fade-in">
      <a href="/">
        <img
          className="w-[40px] h-[40px] absolute top-10 left-10"
          src={back}
          alt="back icon"
        />
      </a>

      <div className="w-full min-h-screen bg-[var(--wine-color)] flex justify-center items-center">
        <div className="flex flex-col w-[85%] h-[70vh] md:min-h-[550px] md:flex-row lg:w-[75%] rounded-lg flex justify-center">
          <div className="w-[40%]">
            <img
              className="h-full w-full object-cover overflow-hidden rounded-l-lg hidden md:block"
              src={imgForm}
              alt="Restaurante Elegante"
            />
          </div>
          <div className="p-10 md:p-15 bg-white w-full md:w-[60%] rounded">
            <div className="mb-9">
              <h1 className="text-xl lg:text-2xl">
                Iniciar sesión o{" "}
                <Link to="/register" className="text-blue-800">
                  Registrarse
                </Link>
              </h1>
            </div>
            <div className="h-[100%]">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
