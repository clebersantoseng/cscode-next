import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 999;
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const Box = styled.div`
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  height: 60px;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  width: 60px;
  bottom: 40px;
  right: 20px;
  position: fixed;

  animation-name: bounce ;
  animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);

  @keyframes bounce {
      0%   { transform: scale(1,1)      translateY(0); }
      10%  { transform: scale(1.1,.9)   translateY(0); }
      30%  { transform: scale(.9,1.1)   translateY(-60px); }
      50%  { transform: scale(1.05,.95) translateY(0); }
      57%  { transform: scale(1,1)      translateY(-7px); }
      64%  { transform: scale(1,1)      translateY(0); }
      100% { transform: scale(1,1)      translateY(0); }
    }
    
  &:hover {
    animation-name: none;
  }
`;