import { Link } from "react-router-dom";

function List() {
  return (
    <div className="justify-content-center d-flex w-100 h100">
      <div className="d-flex flex-column card-register">
        <h1 className="mt-3 title-custom">DNA User List</h1>
        <ul className="user-list-container mt-5">
          <li className="user-list-item w-65">
            <Link
              to="/profile"
              className="w-100 h-100 d-flex justify-content-end align-items-center"
            >
              <div className="user-list-item-info d-flex justify-content-end align-items-center flex-column">
                <h3 className="user-list-item-name">
                  Diego dos Santos Ferreira
                </h3>
                <p className="user-list-item-skills">Front End Developer</p>
                <span className="user-list-item-status" data-employed>
                  Employed
              </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
