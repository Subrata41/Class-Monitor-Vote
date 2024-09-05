import React, { useContext, useState } from "react";
import { VoteContext } from "../context/VoteContext";
import VoteForm from "./VoteForm";
import "./Header.css";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const { candidates } = useContext(VoteContext);
  const totalVotes = candidates.reduce(
    (sum, candidate) => sum + candidate.votes.length,
    0
  );

  return (
    <header className="header">
      <h1>Class Monitor Vote</h1>
      <p>Total Votes: {totalVotes}</p>
      <button className="button" onClick={openForm}>
        Add New Vote
      </button>
      {isFormOpen && <VoteForm onClose={closeForm} />}
    </header>
  );
};

export default Header;
