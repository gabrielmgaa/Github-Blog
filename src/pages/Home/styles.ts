import { styled } from "styled-components";

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  margin: 4.8rem auto;
  grid-gap: 3.2rem;
  
  width: 90%;
  max-width: 90rem;
`