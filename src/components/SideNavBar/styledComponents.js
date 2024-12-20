import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad, FaFileAlt} from 'react-icons/fa'

export const SideNavContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#212121' : '#f1f1f1')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  min-height: 100vh;
`
export const NavItemsContainer = styled.div`
  padding: ${props => (props.horizontal ? '0px' : '20px')};
`
export const NavUnorderedList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: ${props => (props.horizontal ? 'flex' : null)};
  align-items: ${props => (props.horizontal ? 'center' : null)};
`
export const NavListItem = styled.li`
  text-decoretion: none;
  margin-bottom: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`
export const NavListItemTitle = styled.p`
  text-decoretion: none;
  font-weight: 700;
  margin-left: 5px;
`

export const LogoImageEle = styled.img`
  width: 30px;
  margin: 0px;
`

export const StyledHomeIcon = styled(FaHome)`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const StyledFireIcon = styled(FaFire)`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const StyledGameIcon = styled(FaGamepad)`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const StyledSavedIcon = styled(FaFileAlt)`
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#000000')};
`
