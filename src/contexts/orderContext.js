import { createContext } from "react";

export default createContext({
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
  setProducts: () => {},
  handleAddProduct: () => {},
  handleDeleteProduct: () => {},
  resetProducts: () => {},
  newProduct: {},
  setNewProduct: () => {},
});
