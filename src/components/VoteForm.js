import React, { useContext, useState } from "react";
import { VoteContext } from "../context/VoteContext";
import "./VoteForm.css";

const VoteForm = ({ onClose }) => {
  const { candidates, addVote } = useContext(VoteContext);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [voterName, setVoterName] = useState("");

  const handleVoteSubmit = (e) => {
    e.preventDefault();
    if (selectedCandidate && voterName.trim()) {
      addVote(parseInt(selectedCandidate), voterName);
      setVoterName("");
      setSelectedCandidate("");
      onClose(); 
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleVoteSubmit} className="vote-form">
          <label>Student Name: </label>
          <input
            type="text"
            value={voterName}
            onChange={(e) => setVoterName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          &nbsp;
          <label>Choose Monitor: </label>
          <select
            value={selectedCandidate}
            onChange={(e) => setSelectedCandidate(e.target.value)}
            required
          >
            <option value="">Select Candidate</option>
            {candidates.map((candidate) => (
              <option key={candidate.id} value={candidate.id}>
                {candidate.name}
              </option>
            ))}
          </select>
          &nbsp;
          <button type="submit">Vote</button>
          &nbsp;
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoteForm;
