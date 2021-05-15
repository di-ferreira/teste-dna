function Login() {
  return (
    <div className="justify-content-center align-items-center d-flex w-100 h100 bg-login">
      <div className="d-flex flex-column card-login">
        <h1>Login DNA</h1>
        <div className="px-5 mt-3 align-items-end d-flex flex-column">
          <div className="form-group w-100">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your e-mail"
            />
          </div>
          <div className="form-group w-100">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Your password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
