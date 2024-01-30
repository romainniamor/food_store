export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (array, id) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexInArray = (array, idWithUnknownIndex) => {
  return array.findIndex((item) => idWithUnknownIndex === item.id);
};

export const removeObjectById = (array, id) => {
  return array.filter((item) => item.id !== id);
};
