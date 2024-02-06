import { getUserProducts } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseProducts = async (userName, setProducts) => {
  const dataProducts = await getUserProducts(userName);
  setProducts(dataProducts);
};

const initialiseBasket = (userName, setBasket) => {
  const dataBasket = getLocalStorage(userName);
  if (!dataBasket) return;
  setBasket(dataBasket);
};

export const initialiseUserSession = async (
  userName,
  setProducts,
  setBasket
) => {
  await initialiseProducts(userName, setProducts);
  initialiseBasket(userName, setBasket);
};
