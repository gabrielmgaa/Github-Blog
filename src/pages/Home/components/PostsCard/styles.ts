import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const PostsContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20.5rem;
  max-height: 20.5rem;
  padding: 2.4rem;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 0.2s;
  text-decoration: none;

  p{
    color: ${props => props.theme["base-text"]};
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1.5rem;
  }

  &:hover{
    border: 2px solid ${props => props.theme["base-label"]};
  }
`

export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  h3{
    color: ${props => props.theme["base-title"]};
    font-size: 2rem;
    width: 70%;
  }

  span{
    color: ${props => props.theme["base-span"]};
    font-size: 1.4rem;
  }
`