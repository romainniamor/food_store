import { useContext, useState } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import EditMessage from "./EditMessage";
import AdminForm from "./AdminForm";
import InfoEditForm from "./InfoEditForm";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  //state
  const {
    userName,
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditInputRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();

  //comportements
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value }; //dynamic property name
    setProductSelected(productBeingUpdated); //update form
    handleEditProduct(productBeingUpdated, userName); // update menu local & database
  };

  const { isSubmited: isSaved, displaySuccessMessage } =
    useSuccessMessage(3000); // renommage du state de useSuccessMessage

  const handleOnFocus = (e) => {
    const valueOnFocus = e.target.value;
    setValueOnFocus(valueOnFocus);
  };
  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;
    if (valueOnBlur !== valueOnFocus) {
      displaySuccessMessage();
    }
  };

  //render
  return productSelected === EMPTY_PRODUCT ? (
    <EditMessage />
  ) : (
    <AdminForm
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      product={productSelected}
      version={"minimalist"}
      ref={titleEditInputRef}
    >
      {isSaved ? <SavingMessage /> : <InfoEditForm />}
    </AdminForm>
  );
}
