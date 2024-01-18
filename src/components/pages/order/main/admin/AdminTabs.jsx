import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import Tab from "../../../../reusableUi/Tab";
import { FiChevronDown } from "react-icons/fi";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab icon={<FiChevronDown />} />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  background: red;
`;
