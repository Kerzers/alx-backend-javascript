export default function getStudentIdsSum(listStudents) {
  const sum = listStudents.reduce((accum, student) => accum + student.id, 0);
  return sum;
}
