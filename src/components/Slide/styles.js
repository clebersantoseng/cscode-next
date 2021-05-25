import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: left;
  align-items: center;
  position: relative ;

  padding-left: 1rem;

  > div {
    position: absolute;
    opacity: 0;

    &.selected {
      opacity: 1;
    }
  }
  
  @media (max-width: 600px) {
    padding-left: 0;
    padding-top: 50px;
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
`;
