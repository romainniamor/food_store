export const refreshPage = () => {
  window.location.reload();
};

const serialize = (value) => {
  return JSON.stringify(value);
};

const deserialize = (value) => {
  return JSON.parse(value);
};

export const setLocalStorage = (key, value) => {
  const valueSerialized = serialize(value);
  localStorage.setItem(key, valueSerialized);
};

export const getLocalStorage = (key) => {
  return deserialize(localStorage.getItem(key));
};
