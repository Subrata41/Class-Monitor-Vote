import React from "react";
import VoteProvider from "./context/VoteContext";
import Header from "./components/Header";
import CandidatesList from "./components/CandidatesList";
import "./App.css";

const App = () => {
  return (
    <VoteProvider>
      <div className="App">
        <Header />
        <CandidatesList className="candidate" />
      </div>
    </VoteProvider>
  );
};

export default App;
