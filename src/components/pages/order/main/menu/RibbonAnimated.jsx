import { CSSTransition } from "react-transition-group";
import { css } from "styled-components";

import Ribbon from "../../../../reusableUi/Ribbon";

export default function RibbonAnimated() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames={"ribbon-animation"}
    >
      <Ribbon label={"nouveau"} />
    </CSSTransition>
  );
}

export const ribbonAnimation = css`
  .ribbon-animation-appear {
    position: absolute;
    opacity: 0.1;
    z-index: 3;
    transform: scale(1.8);
    &.ribbon-animation-appear-active {
      transition: all 300ms ease-in-out;
      opacity: 1;
      transform: scale(1);
    }
  }

  .ribbon-animation-exit {
    position: absolute;
    opacity: 1;

    &.ribbon-animation-exit-active {
      transition: all 500ms ease-in-out;
      opacity: 0.1;
      transform: scale(1.3);
    }
  }
`;
