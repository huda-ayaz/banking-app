import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProfileDetails() {
  const navigate = useNavigate();
  const navigateToCredits = () => {
    // Navigate to the credits page
    return navigate("/credits");
  };
  const navigateToHome = () => {
    // Navigate to the home page
    return navigate("/");
  };

  return (
    <div>
      <h2>Profile Details</h2>

      <button onClick={navigateToCredits}>Go to Credits</button>
      <button onClick={navigateToHome}>Go to Home</button>

      <nav>
        <ul>
          <li>
            <Link to="/userProfile">Back to Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileDetails;