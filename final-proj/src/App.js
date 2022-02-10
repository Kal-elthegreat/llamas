import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CreateElection } from "./components/election/CreateElection";
import { RegisterUser } from "./components/register/RegisterUser";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="register" element={<CreateElection/>}/>
        <Route path="election" element={<RegisterUser/>}/>
      </Route>
    </Routes>

  );
}
