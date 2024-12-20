import styled from 'styled-components'
import {FaRegSave} from 'react-icons/fa'

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f ' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
  min-height: 70vh;
  width: 100%;
  padding: 0px;
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
export const StyledFireIcon = styled(FaRegSave)`
  color: #ff0000;
  font-size: 20px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkMode ? '#ffffff' : '#1e293b')};
`
export const ResultContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.darkMode ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 80vh;
`
export const VideoUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoResultContainer = styled.div`
  padding: 30px;
  width: 80%;
`
export const NoResultImage = styled.img`
  width: 50%;
`
export const NoResultTitle = styled.h1`
  color: ${props => (props.darkMode ? '#f1f5f9' : '#212121')} ;
  font-weight: 500;
  font-family: 'Roboto;
`
export const NoResultSubTitle = styled.p`
  color:  ${props => (props.darkMode ? '#231f20' : '#181818')};
  font-weight: 500;
  font-family: 'Roboto;
`
