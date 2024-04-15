export default function getListStudents() {
  const newArray = [];
  const objOne = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const objTwo = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const objThree = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  newArray.push(objOne, objTwo, objThree);

  return newArray;
}