import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (product) => {
    //copy state
    //update state
    //maj setter
  };

  return {
    basket,
    handleAddToBasket,
  };
};
