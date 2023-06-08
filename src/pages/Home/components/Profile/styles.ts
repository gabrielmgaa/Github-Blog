import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  grid-gap: 3.2rem;
  align-items: center;

  width: 90%;
  max-width: 90rem;
  margin: -5.5rem auto 0;
  background-color: ${props => props.theme["base-profile"]};
  padding: 2.4rem;
  border-radius: 10px;

  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`

export const ProfileText = styled.p`
  margin-top: 0.8rem;
  overflow-wrap: break-word;
`

export const ProfileContent = styled.div``

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  h2{
    font-size: 2.4rem;
    color: ${props => props.theme["base-title"]};
  }
  `

export const ProfileItemContainer = styled.div`
  display: flex;
  margin-top: 2.4rem;
  gap: 2.4rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`