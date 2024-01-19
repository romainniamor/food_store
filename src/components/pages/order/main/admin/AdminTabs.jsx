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
  // const togggleIsCollapsed = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

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

  const tabsConfig = [
    {
      label: "",
      icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "active" : "",
    },
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddTabSelected ? "active" : "",
    },
    {
      label: "Editer un produit",
      icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditTabSelected ? "active" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            key={tab.label}
            icon={tab.icon}
            label={tab.label}
            className={tab.className}
            onClick={tab.onClick}
          />
        );
      })}
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
