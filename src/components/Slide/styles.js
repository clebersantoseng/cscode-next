import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  img {
    width: 800px;
    margin: 0 auto;

  }
  
`;

export const Pointer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 5px;

  svg {
    margin-left: 5px;
    margin-right: 5px;

    font-size: 12px;
    color: #FFF;
    transition: opacity 0.2ms;
    opacity: 0.2;

    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Dots = styled.div`
  top: 50%;
  right: 10px;
  left: 10px;
  position: absolute;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  justify-content: space-between;  

  button {
    background: none;
    border: none;

    opacity: 0.2;
    transition: opacity 0.2ms;

    :hover {
      opacity: 1;
    }

    svg {
      color: #FFF;
      font-size: 25px;
    }
  }
`;
