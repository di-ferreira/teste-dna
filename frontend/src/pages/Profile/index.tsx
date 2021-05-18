import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../../services/api";
import { formatLocalDate } from "../../utils";

interface IdParam {
  id: string;
}

interface User {
  id: string;
  name: string;
  birthdate: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  status: string;
}

function Profile() {
  //captura id do usuario
  const dataParam = useParams<IdParam>();
  const id = dataParam.id;

  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    birthdate: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    status: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("@DNA:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    api.get(`/users/${id}`).then((response: { data: any }) => {
      const data = response.data;
      const status = data.status.toLowerCase();
      const birthdate = formatLocalDate(data.birthdate, "dd/MM/yyyy");
      const usersData = {
        id: data.id,
        name: data.user.name,
        birthdate,
        email: data.user.email,
        phone: data.phone,
        website: data.website,
        address: data.address,
        status,
      };

      setUser(usersData);
    });
  }, [id]);
  return (
    <div className="justify-content-center align-items-center flex-column d-flex w-100 h100">
      <div
        className="d-flex align-items-center  pb-1 card-profile-container"
        // key={user.key}
      >
        <div className="card-profile d-flex align-items-center justify-content-center">
          <h1 className="title-custom mt-3">{user.name}</h1>
          <p>Front End Developer</p>
        </div>
        <div className="card-profile-info mt-4">
          <h3 className="title-custom mt-3"> Personal Details </h3>
          <ul className="card-profile-info-details">
            <li>
              <span>Birthdate</span>
              {user.birthdate}
            </li>
            <li>
              <span>Phone</span>
              +55 {user.phone}
            </li>
            <li>
              <span>Email</span>
              {user.email}
            </li>
            <li>
              <span> website</span>
              {user.website}
            </li>
            <li>
              <span>ADDRESS</span>
              {user.address}
            </li>
            <li>
              <span>Status</span>
              <span className="card-profile-status" data-status={user.status}>
                {user.status.toUpperCase()}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Link
        to="/"
        className="btn btn-custom-primary d-flex justify-content-center"
      >
        <FontAwesomeIcon
          icon={faSignInAlt}
          rotation={180}
          size="lg"
          className="mr-2"
        />
        Go Back
      </Link>
    </div>
  );
}

export default Profile;
