import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusableUi/ToggleButton";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavBarRightSide({ userName }) {
  //state
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    setIsModeAdmin(!isModeAdmin);
    if (!isModeAdmin) {
      toast.warn("Mode admin activé");
    } //  else {
    //   toast.info("Mode admin désactivé");
    // }
  };

  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked={"activer mode Admin"}
        labelIfChecked={"desactiver mode Admin"}
        onToggle={displayToastNotification}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />

      <Profile userName={userName} />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
