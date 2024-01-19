import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusableUi/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
  //state
  const [isActive, setIsActive] = useState(true);

  //comportements
  const togggleIsCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleIsActive = () => {
    setIsActive(!isActive);
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
        className={isActive ? "active" : ""}
        onClick={toggleIsActive}
      />
      <Tab
        icon={<MdModeEditOutline />}
        label={"Editer un produit"}
        className={isActive ? "" : "active"}
        onClick={toggleIsActive}
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
