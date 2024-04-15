export default function getStudentsByLocation(list, location) {
  let newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  newArray = list.filter((obj) => obj.location === location);
  return newArray;
}
