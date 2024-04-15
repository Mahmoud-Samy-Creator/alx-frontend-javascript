export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentList = list.filter((student) => student.location === city);

  for (const student of studentList) {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student.grade = grade.grade;
      }
    }
    if (!student.grade) {
      student.grade = 'N/A';
    }
  }
  return studentList;
}
