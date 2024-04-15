export default function getStudentsByLocation(list, location) {
  let newArray = [];

  if (!Array.isArray(list)) {
    return newArray;
  }

  // for (const obj of list) {
  //   if (obj.location === location) {
  //     newArray.push(obj);
  //   }
  // }

  newArray = list.filter((obj) => obj.location === location);
  return newArray;
}
