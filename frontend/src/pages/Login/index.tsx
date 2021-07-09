import { observer } from "mobx-react-lite";
import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserStore from "../../stores/UserStore";
import { toast, ToastContainer } from "react-toastify";
import { UserLogin } from "../../stores/UserStore";

function Login() {
  const userStore = useContext(UserStore);
  const { loginUser, isLogged } = userStore;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState(false);

  const history = useHistory();

  const validationLogin = (data: UserLogin) => {
    if (data.password === "" || data.email === "") {
      setErro(true);
      console.log("Validação", true);
      console.log("Validação error", erro);
    } else {
      loginUser(data);
    }
  };

  useEffect(() => {
    if (erro) {
      toast.error("Email ou Senha vazio!", {
        position: toast.POSITION.TOP_RIGHT,
        bodyClassName: "bg-color-danger",
        className: "bg-color-danger",
      });
      setErro(false);
    }
  }, [erro]);

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);

  return (
    <div className="justify-content-center align-items-center d-flex w-100 h100 bg-login">
      <ToastContainer />
      <div className="d-flex flex-column card-login align-items-center">
        <h1 className="mt-4 title-custom">Login DNA</h1>
        <div className="px-5 mt-4 align-items-end d-flex flex-column w-90">
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
            <Link
              to="/"
              onClick={() => {
                validationLogin({ email, password });
              }}
              className="btn btn-custom-primary"
            >
              Enviar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Login);
