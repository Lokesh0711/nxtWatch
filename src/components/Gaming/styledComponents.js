import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f ' : '#f9f9f9')};
`
export const TitleContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100px;
  background-color: ${props => (props.darkMode ? '#313131' : '#ebebeb')};
  margin-top: 0px;
  display: flex;
  align-items: center;
`
export const TitleLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 20px;
  background-color: ${props => (props.darkMode ? '#181818' : '#cbd5e1')};
`
export const StyledFireIcon = styled(FaFire)`
  color: #ff0000;
  font-size: 20px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const ContentContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  padding: 0px;
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
export const NoResultButton = styled.button`
  color: #e2e8f0;
  background-color: #4f46e5;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  font-family: 'Roboto';
  cursor: pointer;
`
export const VideoUnOrderedListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const ResultContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
`
