import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/api";

interface User {
  name: string;
  email: string;
  password: string;
  birthdate: string;
  phone: string;
  website: string;
  address: string;
  status: string;
}

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
    password: "",
    birthdate: "",
    phone: "",
    website: "",
    address: "",
    status: "",
  });

  const onRegisterUser = (e: any): void => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      birthdate,
      phone,
      website,
      address,
      status,
    };
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    api
      .post("/users", userData)
      .then(async (response: any): Promise<void> => {
        toast.success(`Usuário Cadastrado!`, {
          position: toast.POSITION.TOP_RIGHT,
          bodyClassName: "bg-color-main",
          className: "bg-color-main",
        });
      })
      .catch((e) => {
        toast.error("Email já cadastrado!", {
          position: toast.POSITION.TOP_RIGHT,
          bodyClassName: "bg-color-danger",
          className: "bg-color-danger",
        });
      });
  }, [userData]);

  return (
    <div className="justify-content-center d-flex align-items-center w-100 h100">
      <ToastContainer />
      <div className="d-flex flex-column card-register">
        <h1 className="title-custom">Register DNA</h1>

        <div className="row px-5 mt-3">
          <div className="col-md-12">
            <input
              value={name}
              type="text"
              className="input-custom form-group w-100"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row px-5 mt-3">
          <div className="col-md-6">
            <input
              value={email}
              type="email"
              className="input-custom form-group w-100"
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              value={password}
              type="password"
              className="input-custom form-group w-100"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="row px-5 mt-1">
          <div className="col-md-4">
            <input
              value={birthdate}
              type="date"
              className="input-custom form-group w-100"
              placeholder="Birthdate"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              value={phone}
              type="tel"
              className="input-custom form-group w-100"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="input-custom form-group w-100"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected disabled hidden defaultValue="">
                You work status
              </option>
              <option value="freelancer">Freelancer</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>
        </div>

        <div className="row px-5 mt-1">
          <div className="col-md-5">
            <input
              value={website}
              type="text"
              className="input-custom form-group w-100"
              placeholder="Web Site"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="col-md-7">
            <input
              value={address}
              type="text"
              className="input-custom form-group w-100"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="row px-5 mt-3">
          <div className="col-md-6 offset-md-3">
            <button
              type="submit"
              className="w-100 btn btn-custom-primary"
              onClick={(e) => onRegisterUser(e)}
            >
              Send
            </button>
            <span className="login-account w-100 px-3">
              Already have an account
              <Link to="/login">click here!</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
