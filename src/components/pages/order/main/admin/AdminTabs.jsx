import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusableUi/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  const togggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AdminTabsStyled>
      <Tab
        icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        className={isCollapsed ? "collapsed" : ""}
        onClick={togggleIsCollapsed}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  .collapsed {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
