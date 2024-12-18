import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useUser } from "../components/LoginPage/UserContext";
import icCoupon from "../assets/images/icon-coupon.svg";
import icExclusive from "../assets/images/icon-exclusive.svg";
import icDelivery from "../assets/images/icon-delivery.svg";
import Breadcrumbs from "../components/Common/Breadcrumbs";

function LoginPage() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username: username,
        password: password,
      });

      if (response.data) {
        login(response.data);
        navigate("/admin/blog");
      } else {
        setError("Login failed, invalid username or password");
      }
    } catch (error) {
      setError("Login failed, please try again.");
    }
  };

  return (
    <React.Fragment>
      <Breadcrumbs page={"Login"} />
      <div className="login container flex">
        <div className="item">
          <div className="heading">Sign into your account</div>
          <form onSubmit={handleLogin}>
            <div className="bg-white">
              <div className="input-field required">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-field required">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}

              <div style={{ marginBottom: "10px" }}>
                <Link
                  style={{ textDecoration: "underline" }}
                  to="/forgot-password"
                >
                  Forgot password
                </Link>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="button btn-red">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="item create-account">
          <div className="heading">Become an member</div>
          <div className="bg-white">
            <ul>
              <li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h2>Welcome Coupon</h2>
                    Enjoy $10 off on your first purchase when you sign up as an
                    member
                  </div>
                  <div>
                    <img src={icCoupon} style={{ width: "62px" }} />
                  </div>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h2>Exclusive pricing</h2>
                    Receive an exclusive 3% membership discount for all orders
                    during promotional event period*
                  </div>
                  <div>
                    <img src={icExclusive} style={{ width: "64px" }} />
                  </div>
                </div>
              </li>
              <li>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h2>Free delivery</h2>
                    On all orders purchased
                  </div>
                  <div>
                    <img src={icDelivery} style={{ width: "62px" }} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Link className="button btn-default" to="/create-an-account">
              Join us
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
