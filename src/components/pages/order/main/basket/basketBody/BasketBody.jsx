import { useContext } from "react";
import orderContext from "../../../../../../contexts/orderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function BasketBody() {
  const { basket, products } = useContext(orderContext);
  return (
    <>
      {basket.length ? (
        <BasketProducts basket={basket} />
      ) : (
        <EmptyBasket isLoading={products === undefined} />
      )}
    </>
  );
}
