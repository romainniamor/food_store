import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/arrays";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //copy state
    const basketCopy = deepClone(basket);

    const isProductInBasket =
      findInArray(basket, productToAdd.id) !== undefined;

    if (!isProductInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      //manip copy
      const basketUpdated = [newBasketProduct, ...basketCopy];
      //update state
      setBasket(basketUpdated);
    } else {
      return;
    }
  };

  return {
    basket,
    handleAddToBasket,
  };
};
