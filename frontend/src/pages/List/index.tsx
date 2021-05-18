import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

function List() {
  const [users, setUsers] = useState<any[]>();

  useEffect(() => {
    const token = localStorage.getItem("@DNA:token");

    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    api.get(`/users/`).then((response: { data: any }) => {
      const usersData = response.data;
      setUsers(usersData);
    });
  }, []);
  return (
    <div className="justify-content-center d-flex w-100 h100">
      <div className="d-flex flex-column card-register">
        <h1 className="mt-3 title-custom">DNA User List</h1>
        <ul className="user-list-container mt-5">
          {users?.map((u) => (
            <li className="user-list-item w-65" key={u.id}>
              <Link
                to={`/profile/${u.id}`}
                className="w-100 h-100 d-flex justify-content-end align-items-center"
              >
                <div className="user-list-item-info d-flex justify-content-end align-items-center flex-column">
                  <h3 className="user-list-item-name">{u.user.name}</h3>
                  <p className="user-list-item-skills">Front End Developer</p>
                  <span
                    className="user-list-item-status"
                    data-status={u.status.toLowerCase()}
                  >
                    {u.status.toUpperCase()}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
