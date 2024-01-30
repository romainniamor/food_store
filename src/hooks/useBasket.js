import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray, filter } from "../utils/arrays";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //copy state
    const basketCopy = deepClone(basket);

    const productFoundInBasket = findInArray(basket, productToAdd.id);

    if (!productFoundInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      //manip copy
      const basketUpdated = [newBasketProduct, ...basketCopy];
      //update state
      setBasket(basketUpdated);
      return;
    }
    //find product index in basket
    incrementQuantity();

    function incrementQuantity() {
      const indexOfBasketProductToIncrement = basket.findIndex(
        (product) => product.id === productToAdd.id
      );
      //increment quantity ++
      basketCopy[indexOfBasketProductToIncrement].quantity++;
      //update state
      setBasket(basketCopy);
    }
  };

  const handleDeleteFromBasket = (idProducToRemove) => {
    const basketCopy = deepClone(basket);

    const productSelect = basket.findIndex(
      (product) => product.id === idProducToRemove
    );
    let quantityToDecrease = basket[productSelect].quantity;

    if (quantityToDecrease > 1) {
      //decrement quantit --
      basketCopy[productSelect].quantity--;
      setBasket(basketCopy);
      return;
    }
    //update state
    const basketUpdated = filter(basketCopy, idProducToRemove);
    setBasket(basketUpdated);
  };

  return {
    basket,
    handleAddToBasket,
    handleDeleteFromBasket,
  };
};
