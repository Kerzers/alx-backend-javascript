export default function getListStudentIds(array) {
  let arrayIds;
  if (Array.isArray(array)) {
    arrayIds = array.map((obj) => obj.id);
  } else {
    arrayIds = [];
  }
  return arrayIds;
}
