import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useUser } from "../components/LoginPage/UserContext";
import Breadcrumbs from "../components/Common/Breadcrumbs";

function AccountPage() {
  const { user } = useUser();
  const id = user.id;
  const [useData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Breadcrumbs page="My Account" />

      <div className="account-page container">
        {useData && (
          <div className="account-content bg-white">
            <div className="item">
              <div
                className="head"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="ic-profile"></span>Profile
                </div>
                <div style={{ float: "right", fontSize: "14px" }}>
                  <Link to="/">Edit</Link>
                </div>
              </div>
              <div className="info">
                Usename: {useData.username}
                <br />
                Name: {useData.lastName} {useData.firstName}
                <br />
                Email: {useData.email}
                <br />
                Phone: {useData.phone}
              </div>
            </div>
            <div className="item">
              <div className="head">
                <span className="ic-password"></span>
                <Link to="/">Change Password</Link>
              </div>
            </div>
            <div className="item">
              <div
                className="head"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="ic-address"></span>Address Book
                </div>
                <div style={{ float: "right", fontSize: "14px" }}>
                  <Link to="/">Add New</Link>
                </div>
              </div>

              <div className="info">
                {useData.address.address}, {useData.address.city}
                <br />
                {useData.address.postalCode}
                <br />
                {useData.address.country}
              </div>
              <div style={{ fontSize: "14px" }}>
                <Link to="/">Edit</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AccountPage;
