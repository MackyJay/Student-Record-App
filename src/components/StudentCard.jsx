
function StudentCard({ student }) {
  const average = student.scores.reduce(
    (total, score) => total + score,
    0
  ) / student.scores.length;

  const passed = average >= 75;
  return (
    <article className="student-card">
      <h3>{student.name}</h3>
      <p>Section: {student.section}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>
        Status:{" "}
          <span className={passed ? "status-passed" : "status-failed"}>
            {passed ? "Passed" : "Failed"}
          </span>
      </p>
    </article>
  );
}
export default StudentCard;