import { useState, useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusableUi/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../contexts/orderContext";

export default function AdminTabs() {
  //state

  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected,
  } = useContext(OrderContext);

  //comportements
  const togggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const selectTab = (tabselected) => {
    setIsCollapsed(false);

    if (tabselected === "add") {
      setIsAddTabSelected(true);
      setIsEditTabSelected(false);
    }

    if (tabselected === "edit") {
      setIsEditTabSelected(true);
      setIsAddTabSelected(false);
    }
  };
  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "active" : ""}
        onClick={togggleIsCollapsed}
      />
      <Tab
        icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        className={isAddTabSelected ? "active" : ""}
        onClick={() => selectTab("add")}
      />
      <Tab
        icon={<MdModeEditOutline />}
        label={"Editer un produit"}
        className={isEditTabSelected ? "active" : ""}
        onClick={() => selectTab("edit")}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 1px;
  padding: 0 20px;
  .active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
