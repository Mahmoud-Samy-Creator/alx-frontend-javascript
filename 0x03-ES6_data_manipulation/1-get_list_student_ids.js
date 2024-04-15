export default function getListStudentIds(list) {
  let newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  newArray = list.map((student) => student.id);
  return newArray;
}
