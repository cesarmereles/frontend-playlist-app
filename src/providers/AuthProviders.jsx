import { createContext, useState } from "react";

export const AuthContext = createContext();

//TODO ESTE COMPONENTE VA A ENVOLVER LA APLICACION
//*USAMOS CHILDREN PARA USAR ADENTRO DE AuthContext
//*auth esta variable que viene x parametro esta a nivel global
function AuthProviders({ children }) {
  const [auth, setAuth] = useState({});

  const login = ({ user, token }) => {
    setAuth({ user, token });
  };
  const logout = () => {
    setAuth({});
  };
  return (
    <AuthContext.Provider value={(auth, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProviders;
