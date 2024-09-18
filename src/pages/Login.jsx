import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const login = (e) => {
    e.preventdefault();

    signInWithEmailAndPassword(auth, mail, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);

        navigate("/");
      })
      .catch((err) => {
        setErr(true);
      });
  };
  return (
    <>
      <section className=" mt-5 contact_section  long_section">
        <div className="container">
          <div className="form_container col-md-8">
            <div className="heading_container">
              <h2>Login</h2>
            </div>
            <form onSubmit={login}>
              <div>
                {err && <strong> Wrong email or password !</strong>}
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <div className="btn_box">
                <button type="submit">Login</button>
              </div>
              <div className="card-link mt-3">
                <Link className="card-text" to="/register">
                  Create new account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
