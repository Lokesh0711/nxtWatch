import styled from 'styled-components'
import {FaMoon, FaSun} from 'react-icons/fa'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#212121' : '#f1f1f1')};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoImage = styled.img`
  width: ${props => (props.profile ? '25px' : '150px')};
  margin-left: ${props => (props.profile ? '30px' : null)};
  margin-right: ${props => (props.profile ? '30px' : null)};
`

export const NavItemContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
`

export const OutlineButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#4f46e5')};
  padding: 10px;
  border: 1px solid ${props => (props.darkMode ? '#f1f1f1' : '#4f46e5')};
  border-radius: 2px;
  font-weight: 600;
`

export const ColoredButton = styled.button`
  background-color: #4f46e5;
  color: '#ffffff';
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  margin-left: 20px;
`
export const ThemeIconButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`
export const ThemeMoonImage = styled(FaMoon)`
  width: 30px;
  color: #ffffff;
  font-size: 20px;
`
export const ThemeSunImage = styled(FaSun)`
  font-size: 20px;
`
export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justtify-content: center;
`
