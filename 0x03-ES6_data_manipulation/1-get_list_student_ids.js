export default function getListStudentIds(list) {
  const newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  for (const obj of list) {
    newArray.push(obj.id);
  }

  return newArray;
}
