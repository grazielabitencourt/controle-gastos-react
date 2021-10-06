import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // tres colunas com 1 tamanho flexivel
  gap: 2rem; //espacamento entre o meu grid
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display:block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem; // para o card ocupar um pouco mais de espaço como esta no prototipo.
  
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;