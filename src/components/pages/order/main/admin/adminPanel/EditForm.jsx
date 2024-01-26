import { useContext } from "react";
import OrderContext from "../../../../../../contexts/orderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import EditMessage from "./EditMessage";
import AdminForm from "./AdminForm";
import InfoEditForm from "./InfoEditForm";

export default function EditForm() {
  //state
  const {
    productSelected,
    setProductSelected,
    handleEditProduct,
    titleEditInputRef,
  } = useContext(OrderContext);

  //comportements
  const handleChange = (e) => {
    const { value, name } = e.target;
    const productBeingUpdated = { ...productSelected, [name]: value }; //dynamic property name
    setProductSelected(productBeingUpdated); //update form
    handleEditProduct(productBeingUpdated); // update menu
  };

  //render
  return productSelected === EMPTY_PRODUCT ? (
    <EditMessage />
  ) : (
    <AdminForm
      onChange={handleChange}
      product={productSelected}
      version={"minimalist"}
      ref={titleEditInputRef}
    >
      <InfoEditForm />
    </AdminForm>
  );
}
