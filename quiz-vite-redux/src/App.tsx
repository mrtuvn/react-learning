import { DashBoard } from "./pages/DashBoard";
import { Question } from "./pages/Question";
import { FinalScore } from "./pages/FinalScore";
import { LeaderBoard } from "./pages/LeaderBoard";

import BaseLayout from "./layouts/BaseLayout";
import { Route, Routes } from "react-router-dom";
import { paths } from "./routes/path";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path={paths.PATH_HOME} element={<DashBoard />} />
        <Route path={paths.PATH_QUESTION} element={<Question />} />
        <Route path={paths.PATH_FINAL_SCORE} element={<FinalScore />} />
        <Route path={paths.PATH_LEADER_BOARD} element={<LeaderBoard />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
