import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [section, setSection] = useState("A");
  const [score1, setScore1] = useState("");
  const [score2, setScore2] = useState("");
  const [score3, setScore3] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedName = name.trim();
    const rawScores = [score1, score2, score3];
    const scores = rawScores.map(Number);

    if (cleanedName === "") {
      setError("Please enter the student's name.");
      return;
    }

    const hasInvalidScore = rawScores.some(
      (value, index) =>
        value === "" || scores[index] < 0 || scores[index] > 100
    );

    if (hasInvalidScore) {
      setError("Enter all three scores as numbers from 0 to 100.");
      return;
    }

    onAddStudent({ name: cleanedName, section, scores });

    setName("");
    setSection("A");
    setScore1("");
    setScore2("");
    setScore3("");
    setError("");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Add a student</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Student name"
      />

      <select
        value={section}
        onChange={(event) => setSection(event.target.value)}
      >
        <option value="A">Section A</option>
        <option value="B">Section B</option>
        <option value="C">Section C</option>
      </select>

      <div className="score-row">
        <input
          type="number"
          min="0"
          max="100"
          value={score1}
          onChange={(event) => setScore1(event.target.value)}
          placeholder="Score 1"
        />
        <input
          type="number"
          min="0"
          max="100"
          value={score2}
          onChange={(event) => setScore2(event.target.value)}
          placeholder="Score 2"
        />
        <input
          type="number"
          min="0"
          max="100"
          value={score3}
          onChange={(event) => setScore3(event.target.value)}
          placeholder="Score 3"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Add student</button>
    </form>
  );
}

export default StudentForm;