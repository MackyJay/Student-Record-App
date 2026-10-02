import { useState } from "react";
import { students as initialStudents } from "./data/students";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("All");

  function addStudent(newStudent) {
    setStudents((previousStudents) => [
      ...previousStudents,
      { id: Date.now(), ...newStudent }
    ]);
  }

  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSection =
      selectedSection === "All" ||
      student.section === selectedSection;

    return matchesName && matchesSection;
  });

  return (
    <main>
      <h1>Capstone 3 - Student Records App</h1>

      <StudentForm onAddStudent={addStudent} />

      <div className="controls">
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search students"
        />

        <select
          value={selectedSection}
          onChange={(event) => setSelectedSection(event.target.value)}
        >
          <option value="All">All Sections</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      <p>Students found: {filteredStudents.length}</p>

      {filteredStudents.length > 0 ? (
        <StudentList students={filteredStudents} />
      ) : (
        <p>No students found.</p>
      )}
    </main>
  );
}

export default App;