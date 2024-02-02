import { useState } from "react";
import { setLocalStorage } from "../utils/window";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  findInArray,
  removeObjectById,
  findIndexInArray,
} from "../utils/arrays";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (idProductToAdd, userName) => {
    //copy state
    const basketCopy = deepClone(basket);

    const productAlreadyInBasket = findInArray(basketCopy, idProductToAdd);

    if (productAlreadyInBasket) {
      incrementQuantityOfProduct(idProductToAdd, basketCopy, userName);
      return;
    }
    createNewProductInBasket(idProductToAdd, basketCopy, setBasket);
  };

  const incrementQuantityOfProduct = (idProductToAdd, basketCopy, userName) => {
    const indexOfProductToIncrement = findIndexInArray(
      basketCopy,
      idProductToAdd
    );
    basketCopy[indexOfProductToIncrement].quantity++;

    setBasket(basketCopy);
    setLocalStorage(userName, basketCopy);
  };

  const createNewProductInBasket = (
    idProductToAdd,
    basketCopy,
    setBasket,
    userName
  ) => {
    const newProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newProduct, ...basketCopy];

    setBasket(newBasket);
    setLocalStorage(userName, newBasket);
  };

  const handleDeleteFromBasket = (idProducToRemove, userName) => {
    const basketCopy = deepClone(basket);

    const productSelect = findIndexInArray(basket, idProducToRemove);
    let quantityToDecrease = basket[productSelect].quantity;

    if (quantityToDecrease > 1) {
      //decrement quantit --
      basketCopy[productSelect].quantity--;
      setBasket(basketCopy);
      return;
    }
    //update state
    const basketUpdated = removeObjectById(basketCopy, idProducToRemove);
    setBasket(basketUpdated);
    setLocalStorage(userName, basketUpdated);
  };

  const handleDeleteBasketProductFromMenu = (idProductToDelete, userName) => {
    const basketCopy = deepClone(basket);
    //update state
    const basketUpdated = removeObjectById(basketCopy, idProductToDelete);
    setBasket(basketUpdated);
    setLocalStorage(userName, basketUpdated);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleDeleteBasketProductFromMenu,
  };
};
