import React from "react";

export default function ImagePreview({ productTitle, productImageSource }) {
  return (
    <ImagePreviewStyled>
      {productImageSource ? (
        <img src={productImageSource} alt={productTitle} />
      ) : (
        "Aucune image"
      )}
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
