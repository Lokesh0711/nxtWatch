import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const NoResultContainer = styled.div`
  padding: 30px;
  width: 80%;
`
export const NoResultImage = styled.img`
  width: 50%;
`
export const NoResultTitle = styled.h1`
  color: ${props => (props.darkMode ? '#ffffff' : '#ff0000')};
  font-weight: 500;
  font-family: 'Roboto;
`
export const NoResultSubTitle = styled.p`

  color: ${props => (props.darkMode ? '#ffffff' : '#231f20')};
  font-weight: 500;
  font-family: 'Roboto;
`
