import { styled } from "styled-components";

export const SearchInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 90%;
  margin: 5rem auto 0;
  max-width: 90rem;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchHeaderTitle = styled.span`
  font-size: 1.8rem;
  color: ${props => props.theme["base-subtitle"]};
`

export const SearchHeaderPosts = styled.span`
  color: ${props => props.theme["base-span"]};
  font-size: 1.4rem;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 1.6rem;
  outline: none;
  border-radius: 6px;
  border: 1px solid ${props => props.theme["base-border"]};
  background-color: ${props => props.theme["base-input"]};
  color: ${props => props.theme["base-text"]};
  
  &::placeholder{
    color: ${props => props.theme["base-label"]};
  }

  &:focus{
    border: 1px solid ${props => props.theme.blue};
  }
`