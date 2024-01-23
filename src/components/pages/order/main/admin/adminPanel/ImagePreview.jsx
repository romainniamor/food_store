import React from "react";
import { theme } from "../../../../../../theme/index";
import styled from "styled-components";

export default function ImagePreview({ title, imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? <img src={imageSource} alt={title} /> : "Aucune image"}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  padding: 16px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.greyLight};
  color: ${theme.colors.greySemiDark};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
