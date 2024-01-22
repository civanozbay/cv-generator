function Education({ setSchool, setDepartment, setStartDate, setEndDate }) {
  return (
    <>
      <h1>Education</h1>
      <div className="education">
        <input
          type="text"
          name="school"
          placeholder="School"
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type="text"
          name="departmen"
          placeholder="Department"
          onChange={(e) => setDepartment(e.target.value)}
        />

        <label for="start">Start date:</label>
        <input
          type="date"
          id="start"
          name="date-start"
          min="2018-01-01"
          max="2038-12-31"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label for="start">End date:</label>
        <input
          type="date"
          id="end"
          name="date-end"
          min="2018-01-01"
          max="2038-12-31"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </>
  );
}

export default Education;
