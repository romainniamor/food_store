import React from "react";
import { theme } from "../../../../../../theme/index";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import EditMessage from "./EditMessage";

export default function EditForm() {
  return (
    <EditFormStyled>
      <EditMessage />
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div``;
