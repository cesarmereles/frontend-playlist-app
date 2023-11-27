import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../utils/const";

function RegisterForm() {
  //todo const ref = useRef(null) PARA LIMPIAR EL FORMULARIO CUANDO DOY SUBMIT
  const ref = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    //const {avatar,email,username,password} = e.target.elements UNA FORMA DE OBTENER DATOS
    const formData = new FormData(event.target);
    const avatar = formData.get("avatar");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      avatar,
      email,
      username,
      password,
    };
    //*ahora que ya tengo la informacion envio al backend
    const req = await fetch(`${api_url}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (req.status !== 201) return "Error al registrar el usuario";

    //const res = await req.json();
    //console.log(res);
    //*CON ESTE METODO NAVIGATE LO QUE HACE ES ENVIAR A UNA PAGINA DETERMINADA
    navigate("/login");
    //!LIMPIA LOS CAMPOS
    ref.current.reset();
  };
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <label htmlFor="url">
          URL
          <br />
          <input type="url" placeholder="my-avatar" name="avatar" />
        </label>
        <br />
        <label htmlFor="email">
          EMAIL
          <br />
          <input type="email" placeholder="www.test.com" name="email" />
        </label>
        <br />
        <label htmlFor="username">
          USERNAME
          <br />
          <input type="text" placeholder="Joe Doe" name="username" />
        </label>
        <br />
        <label htmlFor="password">
          PASSWORD
          <br />
          <input type="password" placeholder="******" name="password" />
        </label>
        <br />
        <button>Registro</button>
      </form>
    </div>
  );
}

export default RegisterForm;
