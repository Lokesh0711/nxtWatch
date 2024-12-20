import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  LogoImage,
  NavItemContainer,
  OutlineButton,
  ThemeIconButton,
  ThemeMoonImage,
  ThemeSunImage,
  PopupContainer,
  PopupButtonsContainer,
  ColoredButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const onClickChangeTheme = () => {
        changeTheme()
      }
      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const logoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const themeIcon = isDark ? <ThemeMoonImage /> : <ThemeSunImage />

      return (
        <HeaderContainer darkMode={isDark}>
          <Link to="/">
            <LogoImage src={logoUrl} alt="website logo" />
          </Link>
          <NavItemContainer>
            <ThemeIconButton
              type="button"
              data-testid="theme"
              onClick={onClickChangeTheme}
            >
              {themeIcon}
            </ThemeIconButton>

            <LogoImage
              profile="true"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              position="center"
              trigger={
                <OutlineButton darkMode={isDark} type="button">
                  Logout
                </OutlineButton>
              }
            >
              {close => (
                <PopupContainer>
                  <div>
                    <p>Are you sure, you want to logout</p>
                  </div>
                  <PopupButtonsContainer>
                    <OutlineButton type="button" onClick={() => close()}>
                      Cancel
                    </OutlineButton>
                    <ColoredButton type="button" onClick={onLogout}>
                      Confirm
                    </ColoredButton>
                  </PopupButtonsContainer>
                </PopupContainer>
              )}
            </Popup>
          </NavItemContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
