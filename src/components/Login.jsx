import { useRef } from "react";
import { api_url } from "../utils/const";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

function Login() {
  const ref = useRef(null);
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const user = {
      email,
      password,
    };
    const req = await fetch(`${api_url}/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (req.status !== 200) {
      ref.current.reset();
      return "Error al logearse";
    }
    const res = await req.json();
    Login(res);
    ref.current.reset();
    navigate("/");
  };
  return (
    <div>
      <h2>Login de Usuario</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <label htmlFor="email">
          EMAIL
          <br />
          <input type="email" placeholder="www.test.com" name="email" />
        </label>
        <br />
        <label htmlFor="password">
          PASSWORD
          <br />
          <input type="password" placeholder="******" name="password" />
        </label>
        <br />
        <button>Login Usuario</button>
      </form>
    </div>
  );
}

export default Login;
