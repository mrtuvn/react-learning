import React from "react";

export default function UserDetail({ currentUser, failureCount }) {
  if (!currentUser) {
    return <div>Please click view.</div>;
  }

  return (
    <div className="">
      Failure call times: {failureCount}
      <br />
      <br />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {currentUser?.id || "N/A"}
            </th>
            <td className="px-6 py-4">{currentUser?.title || "N/A"}</td>
            <td className="px-6 py-4">{currentUser?.brand || "N/A"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
