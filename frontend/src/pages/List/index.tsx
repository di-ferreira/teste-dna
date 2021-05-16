import { Link } from "react-router-dom";
import ProfileImg from "../../assets/img/hero.png";

function List() {
  return (
    <div className="justify-content-center d-flex w-100 h100 bg-login">
      <div className="d-flex flex-column card-login align-items-center">
        <h1 className="mt-4 title-custom">DNA User List</h1>
        <div className="px-5 mt-4 align-items-end d-flex flex-column w-90">
          <ul className="user-list-container">
            <li className="user-list-item">
              <Link to="/profile">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
                <h3 className="user-list-item-name">Aquiles Vieira Ferreira</h3>
                <h5 className="user-list-item-skills">UI/UX & Web Developer</h5>
                <span className="user-list-item-status-01">Freelancer</span>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="/profile">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
                <h3 className="user-list-item-name">
                  Diego dos Santos Ferreira
                </h3>
                <h5 className="user-list-item-skills">Front Edn Developer</h5>
                <span className="user-list-item-status-02">Employed</span>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="/profile">
                <img src={ProfileImg} alt="" className="user-list-item-image" />
                <h3 className="user-list-item-name">Priscila Gomes Vieiera</h3>
                <h5 className="user-list-item-skills">Back End</h5>
                <span className="user-list-item-status-03">Unemployed</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
