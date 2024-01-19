import { useState, useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusableUi/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OrderContext from "../../../../../contexts/orderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  //state

  const {
    isCollapsed,
    setIsCollapsed,

    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  //comportements

  const selectTab = (tabselected) => {
    setIsCollapsed(false); //ouverture du pannel
    setCurrentTabSelected(tabselected); //reactualise l onglet selectionné
  };

  const tabs = getTabsConfig(currentTabSelected);

  //render

  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onclick={() => setIsCollapsed(!isCollapsed)}
        classname={isCollapsed ? "active" : ""}
      />

      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            icon={tab.icon}
            label={tab.label}
            className={tab.className}
            onClick={() => selectTab(tab.index)}
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
