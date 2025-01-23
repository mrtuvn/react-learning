import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Term from "./pages/Term";
import NotFound from "./pages/NotFound";
import BaseLayout from "./layouts/BaseLayout";
import Nav from "./components/common/Nav";

function App() {
  return (
    <BaseLayout>
      <div className="container mx-auto">
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />} />
          <Route path="term" element={<Term />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BaseLayout>
  );
}

export default App;
