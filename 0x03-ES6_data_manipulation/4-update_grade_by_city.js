export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentList = list.filter((student) => student.location === city);
  /* eslint-disable */
  const updatedStudentList = studentList.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  });
  return updatedStudentList;
}
