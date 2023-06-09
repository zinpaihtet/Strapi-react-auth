import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

function SignUp() {
  const [SignUpData, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    // stapi authReady
    // retur true

    console.table(SignUpData);

    const { name, email, password } = SignUpData;

    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: name,
        email,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        dispatch({
          type: "SET_USER",
          payload: SignUpData,
        });
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });

    console.log("State Updated to Auth");
  };

  const onChangeHandler = (e) => {
    setSignUp({
      ...SignUpData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="singin">
      <h1>Sign Up form</h1>
      <form onSubmit={submitHandler}>
        <input
          name="name"
          value={SignUpData.name}
          type="text"
          placeholder="enter your name"
          onChange={onChangeHandler}
        />
        <input
          name="email"
          value={SignUpData.email}
          type="text"
          placeholder="enter your email"
          onChange={onChangeHandler}
        />
        <input
          name="password"
          type="password"
          value={SignUpData.password}
          placeholder="enter your password"
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
