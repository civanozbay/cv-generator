import { useState } from "react";
function WorkExperience({ setCompany, setPosition, setResponsibility }) {
  return (
    <>
      <h1>Work Experince</h1>
      <div className="work-experience">
        <input
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          name="company"
          placeholder="Company"
        />
        <input
          type="text"
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          placeholder="Position"
        />
        <textarea
          type="text"
          name="responsibility"
          placeholder="Responsibility"
          onChange={(e) => setResponsibility(e.target.value)}
          style={{ resize: "none" }}
        />
      </div>
    </>
  );
}

export default WorkExperience;
