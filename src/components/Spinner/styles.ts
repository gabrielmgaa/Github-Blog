import { styled } from "styled-components";

export const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid rgba(0,0,0,0.7);
  border-left: 2px solid ${props => props.theme["base-text"]};
  border-radius: 999px;
  animation: spin 1s linear infinite;

  @keyframes spin{
    to { transform: rotate(360deg)}
  }
`