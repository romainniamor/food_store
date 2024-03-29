import { deepClone, removeObjectById } from "./../utils/arrays";
import { useState } from "react";
import { fakeMenu as menu } from "../fakeData/fakeMenu";
import { syncMenus } from "../api/product";

export const useProducts = () => {
  //state
  const [products, setProducts] = useState();

  //comportements CRUD
  const handleAddProduct = (newProduct, userName) => {
    //copie du array
    const productsCopy = deepClone(products);

    //manip du array
    const productsUpdated = [newProduct, ...productsCopy];

    //update du state
    setProducts(productsUpdated);
    syncMenus(userName, productsUpdated);
  };

  const handleDeleteProduct = (idProduct, userName) => {
    //copy
    const productsCopy = deepClone(products);

    //manip du tableau
    const productsUpdated = removeObjectById(productsCopy, idProduct);

    //maj state
    setProducts(productsUpdated);
    syncMenus(userName, productsUpdated);
  };

  const handleEditProduct = (productBeingEdited, userName) => {
    //copie du state
    const productsCopy = deepClone(products);
    //manip du state
    const indexProductToEdit = products.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    productsCopy[indexProductToEdit] = productBeingEdited;

    //update du state
    setProducts(productsCopy);
    syncMenus(userName, productsCopy);
  };

  const resetProducts = (userName) => {
    setProducts(menu.LARGE);
    syncMenus(userName, menu.LARGE);
  };

  return {
    products,
    setProducts,
    handleAddProduct,
    handleDeleteProduct,
    handleEditProduct,
    resetProducts,
  };
};
