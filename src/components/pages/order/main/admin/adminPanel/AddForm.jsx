import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import AdminForm from "./AdminForm";
import { EMPTY_PRODUCT } from "./../../../../../../enums/product";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../../../reusableUi/Button";

import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function AddForm() {
  //state
  const { handleAddProduct, newProduct, setNewProduct, userName } =
    useContext(OrderContext);
  const { isSubmited, displaySuccessMessage } = useSuccessMessage(3000); //custom hook

  //comportements

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };
    handleAddProduct(newProductToAdd, userName);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  // const priceInputValid = (inputValue) => {
  //   const isValid = /^[0-9.]+$/.test(inputValue);
  //   return isValid;
  // };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    // if (name === "price" && !priceInputValid(newValue)) {
    //   return;
    // }

    setNewProduct({ ...newProduct, [name]: newValue }); //dynamic property name
  };

  return (
    <AdminForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      product={newProduct}
      isSubmited={isSubmited}
      version={"minimalist"}
    >
      <Button
        className="submit-button"
        version="success"
        content={" Ajouter un nouveau produit au menu"}
      />
      {isSubmited && <SubmitMessage />}
    </AdminForm>
  );
}
