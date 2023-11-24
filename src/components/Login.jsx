 
  function Login() {
    return (
      <div>
        <h2>Login de Usuario</h2>
        <form>
          <label htmlFor="email">
            EMAIL
            <br />
            <input type="email" placeholder="www.test.com" />
          </label>
          <br />
          <label htmlFor="password">
            PASSWORD
            <br />
            <input type="password" placeholder="******" />
          </label>
          <br />
          <button>Login Usuario</button>
        </form>
      </div>
      
    )
  }
  
  export default Login