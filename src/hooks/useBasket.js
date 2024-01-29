import { useState } from "react";

import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket] = useState(fakeBasket.SMALL);

  return {
    basket,
  };
};
