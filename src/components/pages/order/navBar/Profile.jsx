import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import { theme } from "../../../../theme";

export default function Profile() {
  const { userName } = useParams();
  return (
    <ProfileStyled>
      <div className="user-box">
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

  .user-box {
    text-align: center;

    p {
      font-size: ${theme.fonts.sm};
    }

    .userName {
      text-transform: capitalize;
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.medium};
    }

    button {
      color: ${theme.colors.greyBlue};
      background: none;
      border: none;
      cursor: pointer;
      font-size: ${theme.fonts.s};
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0%;
        height: 1px;
        background: ${theme.colors.greyMedium};
        transition: width 0.3s ease-in-out;
      }
      &:hover::before {
        width: 100%;
      }
    }
  }

  .logo-profile {
    margin: auto;
    .navIcon {
      font-size: ${theme.fonts.P4};
    }
  }
`;
