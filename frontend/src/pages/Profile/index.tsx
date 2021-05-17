import { Link } from "react-router-dom";
import ImageProfile from "../../assets/img/hero.png";
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
  return (
    <div className="justify-content-center align-items-center flex-column d-flex w-100 h100">
      <div className="d-flex align-items-center pb-1 card-profile-container">
        <div className="card-profile">
          <div className="profile-content-image">
            <img src={ImageProfile} alt="Profile" />
          </div>
          <h1 className="title-custom mt-3">Diego Ferreira</h1>
          <p>Front End Developer</p>
        </div>
        <div className="card-profile-info mt-4">
          <h3 className="title-custom mt-3"> Personal Details </h3>
          <ul className="card-profile-info-details">
            <li>
              <span>Birthdate</span>
              21-02-1992
            </li>
            <li>
              <span>Phone</span>
              +91 99886644332
            </li>
            <li>
              <span>Email</span>
              cv@example.com
            </li>
            <li>
              <span> website</span>www.example.com
            </li>
            <li>
              <span>ADDRESS</span>
              123 London, UK Job
            </li>
            <li>
              <span>Status</span>
              <span className="card-profile-status" data-employed>
                Employed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" className="btn btn-custom-primary d-flex justify-content-center">
        <FontAwesomeIcon icon={faSignInAlt} rotation={180} size="lg" className="mr-2" />
          Go Back
        </Link>
    </div>
  );
}

export default Profile;
