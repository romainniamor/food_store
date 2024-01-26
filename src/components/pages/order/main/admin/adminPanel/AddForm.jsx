import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import AdminForm from "./AdminForm";
import { EMPTY_PRODUCT } from "./../../../../../../enums/product";

export default function AddForm() {
  //state
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);
  const [isSubmited, setIsSubmited] = useState(false);

  //comportements

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  const priceInputValid = (inputValue) => {
    const isValid = /^[0-9.]+$/.test(inputValue);
    return isValid;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    if (name === "price" && !priceInputValid(newValue)) {
      return;
    }

    setNewProduct({ ...newProduct, [name]: newValue }); //dynamic property name
  };

  return (
    <AdminForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      product={newProduct}
      isSubmited={isSubmited}
      version={"minimalist"}
    ></AdminForm>
  );
}
