import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
function Header() {
  const { currentUser, dispatch } = React.useContext(AuthContext);

  const logoutHandler = () => {
    dispatch({
      type: "SET_USER",
      payload: null,
    });
    console.log("user logout");
  };
  return (
    <>
      <div className="navbar">
        <ul>
          {currentUser ? (
            <li>
              {" "}
              <Link to={"/logout"} onClick={logoutHandler}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/signin"}>SignIn</Link>
              </li>
              <li>
                <Link to={"/signup"}>SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default Header;
