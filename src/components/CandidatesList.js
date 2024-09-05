import React, { useContext } from "react";
import { VoteContext } from "../context/VoteContext";
import Candidate from "./Candidate";

const CandidatesList = () => {
  const { candidates } = useContext(VoteContext);

  return (
    <div>
      {candidates.map((candidate) => (
        <Candidate key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};

export default CandidatesList;
