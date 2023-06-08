import { styled } from "styled-components";

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-transform: uppercase;
  color: ${props => props.theme.blue};
  text-decoration: none;
  height: 90%;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
  cursor: pointer;
  
  span{
    font-size: 1.2rem;
    font-weight: bold;
  }

  &:hover{
    border-bottom: 1px solid ${props => props.theme.blue}; 
  }
`

export const LinkContainer = styled.div`
  height: 5%;
  font-weight: bold;
  a{
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-transform: uppercase;
    color: ${props => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s;
  }

  span{
    font-size: 1.2rem;
  }

  a:hover{
    border-bottom: 1px solid ${props => props.theme.blue}; 
  }
`