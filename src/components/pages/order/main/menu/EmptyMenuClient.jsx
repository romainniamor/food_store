import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <h2>victime de notre succès ?! :d </h2>
      <h2>de nouvelles recettes sont en cours de préparation</h2>
      <h2>à très vite</h2>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled.div`
  h2 {
    text-transform: uppercase;
  }
`;
