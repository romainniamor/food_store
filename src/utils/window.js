export const refreshPage = () => {
  window.location.reload();
};

const serialize = (value) => {
  return JSON.stringify(value);
};

export const setLocalStorage = (key, value) => {
  const valueSerialized = serialize(value);
  localStorage.setItem(key, valueSerialized);
};
