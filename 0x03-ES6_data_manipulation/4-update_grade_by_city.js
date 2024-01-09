export default function updateStudentGradeByCity(listStudent, city, array) {
  if (!Array.isArray(listStudent) || !Array.isArray(array)) {
    return [];
  }
  const cityStd = listStudent.filter((student) => student.location === city).map((student) => {
    const item2 = array.find((student2) => student.id === student2.studentId);

    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  return cityStd;
}
