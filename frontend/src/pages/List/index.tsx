import { Link } from "react-router-dom";
import ProfileImg from "../../assets/img/hero.png";

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
              <div className="user-list-item-container-image">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
              </div>
              <div className="user-list-item-info">
                <h3 className="user-list-item-name">
                  Diego dos Santos Ferreira
                </h3>
                <p className="user-list-item-skills">Front End Developer</p>
              </div>
              <span className="user-list-item-status" data-employed>
                Employed
              </span>
            </Link>
          </li>
          <li className="user-list-item w-65">
            <Link
              to="/profile"
              className="w-100 h-100 d-flex justify-content-end align-items-center"
            >
              <div className="user-list-item-container-image">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
              </div>
              <div className="user-list-item-info">
                <h3 className="user-list-item-name">
                  Diego dos Santos Ferreira
                </h3>
                <p className="user-list-item-skills">Front End Developer</p>
              </div>
              <span className="user-list-item-status" data-unemployed>
                Unemployed
              </span>
            </Link>
          </li>
          <li className="user-list-item w-65">
            <Link
              to="/profile"
              className="w-100 h-100 d-flex justify-content-end align-items-center"
            >
              <div className="user-list-item-container-image">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
              </div>
              <div className="user-list-item-info">
                <h3 className="user-list-item-name">
                  Diego dos Santos Ferreira
                </h3>
                <p className="user-list-item-skills">Front End Developer</p>
              </div>
              <span className="user-list-item-status" data-freelancer>
                Freelancer
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
