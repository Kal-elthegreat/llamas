import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CreateElection } from "./components/election/CreateElection";
import { RegisterVoter } from "./components/register/RegisterVoter";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="register" element={<RegisterVoter/>}/> {/* Redux Provider wraps here */}
        <Route path="election" element={<CreateElection/>}/> {/* Redux Provider wraps here */}
      </Route>
    </Routes>

  );
}
