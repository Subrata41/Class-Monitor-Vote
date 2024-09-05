import React, { createContext, useState } from "react";

export const VoteContext = createContext();

const VoteProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Suresh", votes: [] },
    { id: 2, name: "Deepank", votes: [] },
    { id: 3, name: "Abhik", votes: [] },
  ]);

  const addVote = (candidateId, voterName) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId
          ? { ...candidate, votes: [...candidate.votes, voterName] }
          : candidate
      )
    );
  };

  const deleteVote = (candidateId, voterName) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === candidateId
          ? {
              ...candidate,
              votes: candidate.votes.filter((v) => v !== voterName),
            }
          : candidate
      )
    );
  };

  return (
    <VoteContext.Provider value={{ candidates, addVote, deleteVote }}>
      {children}
    </VoteContext.Provider>
  );
};

export default VoteProvider;
