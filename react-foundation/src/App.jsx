import { Link, Outlet } from "react-router-dom";

import CounterClass from "./pages/CounterClass";
import TreeSeletPure from "./components/TreeSeletPure";

import StopWatchRef from "./pages/RefHook";

function App() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className="ms-3">
              <Link
                to="/ref-hook"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Ref Hook
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <Outlet />
        </div>
      </div>

      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>

      <CounterClass />

      <hr />
      <TreeSeletPure />

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
