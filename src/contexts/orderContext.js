import { createContext } from "react";

export default createContext({
  userName: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddTabSelected: true,
  setIsAddTabSelected: () => {},

  isEditTabSelected: false,
  setIsEditTabSelected: () => {},

  curentTabSelected: "add",
  setCurrentTabSelected: () => {},

  products: [],
  handleProductSelected: () => {},
  setProducts: () => {},
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  handleEditProduct: () => {},
  resetProducts: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditInputRef: {},

  basket: [],
  setBasket: () => {},

  handleAddToBasket: () => {},
  handleDeleteFromBasket: () => {},
  handleDeleteBasketProductFromMenu: () => {},
});
