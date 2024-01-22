import styled from "styled-components";
import { formatPrice } from "../../../../utils/math";
import { theme } from "../../../../theme";
import { TiDelete } from "react-icons/ti";
import OrderContext from "../../../../contexts/orderContext";
import { useContext } from "react";

export default function CardProduct({ title, img, price, hasDeleteButton }) {
  return (
    <CardStyled>
      {hasDeleteButton && (
        <button className="delete-button">
          <TiDelete />
        </button>
      )}
      <div className="image">
        <img src={img} alt="product-picture" />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <p className="price">{formatPrice(price)}</p>
          <div className="button-box">
            <button className="add-button">ajouter</button>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};

  .delete-button {
    position: absolute;
    right: 15px;
    top: 15px;
    color: ${theme.colors.primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;

    &:hover {
      color: ${theme.colors.red};
    }
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;
    font-family: "Amatic SC", cursive;

    .title {
      margin: auto;
      font-size: ${theme.fonts.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.weights.medium};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .price {
      display: flex;
      align-items: center;
      text-align: left;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-size: ${theme.fonts.P3};
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.medium};
    }

    .button-box {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-button {
      padding: 12px;
      width: 100%;
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: none;
      border-radius: ${theme.borderRadius.round};
      text-transform: capitalize;
      font-size: ${theme.fonts.xs};
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
      }
      &:active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  }
`;
