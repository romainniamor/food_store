import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  findInArray,
  removeObjectById,
  findIndexInArray,
} from "../utils/arrays";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (idProductToAdd) => {
    //copy state
    const basketCopy = deepClone(basket);

    const productAlreadyInBasket = findInArray(basketCopy, idProductToAdd);

    if (productAlreadyInBasket) {
      incrementQuantityOfProduct(idProductToAdd, basketCopy);
      return;
    }
    createNewProductInBasket(idProductToAdd, basketCopy, setBasket);
  };

  const incrementQuantityOfProduct = (idProductToAdd, basketCopy) => {
    const indexOfProductToIncrement = findIndexInArray(
      basketCopy,
      idProductToAdd
    );
    basketCopy[indexOfProductToIncrement].quantity++;

    setBasket(basketCopy);
  };

  const createNewProductInBasket = (idProductToAdd, basketCopy, setBasket) => {
    const newProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newProduct, ...basketCopy];

    setBasket(newBasket);
  };

  const handleDeleteFromBasket = (idProducToRemove) => {
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
  };

  return {
    basket,
    handleAddToBasket,
    handleDeleteFromBasket,
  };
};
