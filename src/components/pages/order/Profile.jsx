import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { theme } from "../../../theme";

export default function Profile({ userName }) {
  return (
    <ProfileStyled>
      <div>
        <p>
          <span>Hey, </span>
          <span className="userName">{userName}</span>
        </p>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
      </div>
      <div className="logo-profile">
        <BsPersonCircle className="navIcon" />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  align-items: center;

  p {
    font-size: ${theme.fonts.P0};
  }

  .userName {
    text-transform: capitalize;
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.medium};
  }

  .logo-profile {
    margin: auto;
    .navIcon {
      font-size: ${theme.fonts.P3};
    }
  }

  button {
    color: ${theme.colors.greyBlue};
    border: none;
    cursor: pointer;
    font-size: ${theme.fonts.xs};
    position: relative;
    &:hover::before {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${theme.colors.greyMedium};
    }
  }
`;
