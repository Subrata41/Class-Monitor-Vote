import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";

const Candidate = ({ candidate }) => {
  const { deleteVote } = useContext(VoteContext);

  return (
    <div>
      <h2>{candidate.name}</h2>
      <p>Total Votes: {candidate.votes.length}</p>
      {candidate.votes.map((voter, index) => (
        <div key={index}>
          {voter}{" "}
          <button
            style={{ backgroundColor: "#dc3545" }}
            onClick={() => deleteVote(candidate.id, voter)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Candidate;
