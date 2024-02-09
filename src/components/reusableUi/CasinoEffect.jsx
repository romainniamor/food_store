import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ className, count }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition timeout={300} classNames="count-animated" key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  line-height: 1.2;
  overflow: hidden;
  position: relative;

  span {
    display: inline-block;
    text-align: left;
  }

  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transform: translateY(0%);
    transition: transform 0.3s ease-in-out;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: all 0.3s ease-in-out;
  }
`;
