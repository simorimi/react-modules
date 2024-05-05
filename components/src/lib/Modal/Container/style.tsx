import styled from "styled-components";
import { ContainerPositionType } from "./Container";

const POSITION_STYLES = {
  top: `
    top: 0;
    width: 100%;
    
    border-radius: 0px 0px 10px 10px;
    `,
  center: `
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    width: 300px;
    
    border-radius: 8px;
    `,
  bottom: `
    top: 100%;
    transform: translateY(-100%);

    width: 100%;
  
    border-radius: 10px 10px 0px 0px;
    `,
};

export const Container = styled.div<{ $position: ContainerPositionType }>`
  position: absolute;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  background-color: #ffffff;
  ${({ $position }) => POSITION_STYLES[$position]};
`;
