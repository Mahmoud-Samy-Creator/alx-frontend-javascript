export default function getStudentIdsSum(list) {
  const newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  for (const obj of list) {
    newArray.push(obj.id);
  }

  const sumId = newArray.reduce((acc, current) => (acc + current));

  return sumId;
}
