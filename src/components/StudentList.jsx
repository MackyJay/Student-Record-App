import StudentCard from "./StudentCard.jsx";

function StudentList({ students }) {
  return (
    <section>
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  );
}

export default StudentList;