export const RegisterForm = () => {
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label htmlFor="url">
          URL
          <br />
          <input type="url" placeholder="my-avatar" />
        </label>
        <br />
        <label htmlFor="email">
          EMAIL
          <br />
          <input type="email" placeholder="www.test.com" />
        </label>
        <br />
        <label htmlFor="username">
          USERNAME
          <br />
          <input type="text" placeholder="Joe Doe" />
        </label>
        <br />
        <label htmlFor="password">
          PASSWORD
          <br />
          <input type="password" placeholder="******" />
        </label>
        <br />
        <button>Registro</button>
      </form>
    </div>
  );
};
