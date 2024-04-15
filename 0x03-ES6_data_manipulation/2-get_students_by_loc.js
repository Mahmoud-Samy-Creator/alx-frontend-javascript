export default function getStudentsByLocation(list, location) {
  const newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  for (const obj of list) {
    if (obj.location === location) {
      newArray.push(obj);
    }
  }
  return newArray;
}
