import { styled } from "styled-components"

export const PostsContainer = styled.div`
  background-color: ${props => props.theme["base-profile"]};
  padding: 2.4rem;
  border-radius: 10px;
  margin: -5rem auto 0;

  h2{
    font-size: 2.4rem;
    color: ${props => props.theme["base-title"]};
    margin-top: 2rem;
  }
`

export const PostsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostsContainerItems = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-top: 1.2rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg,span{
    color: ${props => props.theme["base-span"]};
  }
`