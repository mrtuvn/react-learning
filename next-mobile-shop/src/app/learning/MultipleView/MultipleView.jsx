"use client";
import React from "react";
import Users from "./Users";
import UserDetail from "./UserDetail";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve, ms));
}

function MultipleView() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [failureCount, setFailureCount] = React.useState(0);
  const [isCounting, setIsCounting] = React.useState(false);

  React.useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/products?limit=5");
      const data = await res.json();
      setUsers(data.products);
    }
    fetchUsers();
  }, []);

  function gotoUser(user) {
    setCurrentUser(user);
    setIsCounting(true);
    setFailureCount(0);
  }

  React.useEffect(() => {
    let timer = null;
    async function fetchUserDetail() {
      try {
        const res = await fetch("https://dummyjson.com/product/2123123").then(
          (res) => res.json()
        );
        if (res.message) {
          setFailureCount((prevState) => prevState + 1);
        } else {
          setFailureCount(0); // reset failure count if call success
        }
      } catch (err) {
        setFailureCount((prevState) => prevState + 1);
      }
    }

    async function callApi() {
      if (failureCount < 5) {
        fetchUserDetail();
      } else {
        setIsCounting(false);
        setTimeout(() => {
          setFailureCount(1);
          setIsCounting(true);
        }, 1000 * 10); // Pause 10s
      }
    }

    if (isCounting) {
      timer = setInterval(() => {
        callApi();
      }, 1000 * 5); // call API after 5s
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isCounting, failureCount]);

  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
        Requirements{" "}
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">
          Hard
        </span>
      </h2>
      <div className="space-y-1 text-gray-500 list-disc list-inside">
        Create a small Brute-View program switch views.
        <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
          <li>Call api every 5s when User has been clicked.</li>
          <li>Show failure call time.</li>
          <li>After 5 failure, sleep 10s and reset failure call time.</li>
          <li>Reset call api when switch views.</li>
        </ul>
      </div>
      <br />
      <h4 className="mb-2 text-lg font-semibold text-gray-900">API</h4>
      <div className="space-y-1 text-gray-500 list-disc list-inside">
        <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
          <li>
            GET views list:{" "}
            <a
              href="https://dummyjson.com/products?limit=5"
              target="_blank"
              className="font-medium text-blue-600 underline"
            >
              https://dummyjson.com/products?limit=5
            </a>
          </li>
          <li>
            GET fake failure:{" "}
            <a
              href="https://dummyjson.com/product/2123123"
              target="_blank"
              className="font-medium text-blue-600 underline"
            >
              https://dummyjson.com/product/2123123
            </a>
          </li>
        </ul>
      </div>

      <br />
      <hr />
      <br />
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Demo</h2>
      <div className="view_container">
        <Users
          dataSource={users}
          currentUser={currentUser}
          gotoUser={gotoUser}
        />
        <UserDetail currentUser={currentUser} failureCount={failureCount} />
      </div>
    </div>
  );
}

export default MultipleView;
