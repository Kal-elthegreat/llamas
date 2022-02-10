import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CreateElection } from "./components/election/createElection";
import { VoterFormTool } from "./components/register/VoterFormTool";
import { llamasStore } from "./shared/llamasStore";
import { VoterTable } from "./components/register/VoterTable";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="register" element={
          <Provider store = {llamasStore}>
             <VoterFormTool/>
             <VoterTable />
          </Provider>
        }/> 
        <Route path="election" element={<Provider store={llamasStore}>
          <CreateElection/>
        </Provider>}/>
      </Route>
    </Routes>

  );
}
