export default function getStudentsByLocation(listStudent, city) {
  let result = [];
  result = listStudent.filter((student) => student.location === city);
  return result;
}
