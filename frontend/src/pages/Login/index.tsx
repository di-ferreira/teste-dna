import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserStore from "../../stores/UserStore";
import { UserLogin } from "../../stores/UserStore";

function Login() {
  const userStore = useContext(UserStore);
  const { loginUser } = userStore;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const validationLogin = (data: UserLogin) => {
    if (data.password !== "" || data.email !== "") {
      loginUser(data);
      setErrorLogin(false);
    } else {
      setErrorLogin(true);
    }
  };

  return (
    <div className="justify-content-center align-items-center d-flex w-100 h100 bg-login">
      <div className="d-flex flex-column card-login align-items-center">
        <h1 className="mt-4 title-custom">Login DNA</h1>
        <div className="px-5 mt-4 align-items-end d-flex flex-column w-90">
          {errorLogin ? (
            <span className="my-3">Email or password is empty!</span>
          ) : (
            ""
          )}
          <input
            type="email"
            value={email}
            className="input-custom form-group w-100"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            className="input-custom form-group w-100"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex w-100 align-items-center justify-content-between">
            <span className="create-account">
              don't have an account yet?
              <Link to="/register">click here!</Link>
            </span>
            <button
              onClick={() => {
                validationLogin({ email, password });
              }}
              type="submit"
              className="btn btn-custom-primary"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Login);
