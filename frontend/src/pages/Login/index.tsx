function Login() {
  return (
    <div className="justify-content-center align-items-center d-flex w-100 h100 bg-login">
      <div className="d-flex flex-column card-login align-items-center">
        <h1 className="mt-4 title-custom">Login DNA</h1>
        <div className="px-5 mt-4 align-items-end d-flex flex-column w-90">
          <input
            type="email"
            className="input-custom form-group w-100"
            placeholder="E-mail"
          />
          <input
            type="password"
            className="input-custom form-group w-100"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-custom-primary">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
