import ThemeContext from '../../context/ThemeContext'

import {
  SideNavContainer,
  NavItemsContainer,
  NavUnorderedList,
  NavListItem,
  NavListItemTitle,
  LogoImageEle,
  StyledHomeIcon,
  StyledFireIcon,
  StyledGameIcon,
  StyledSavedIcon,
  StyledLink,
} from './styledComponents'

const SideNavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SideNavContainer darkMode={isDark}>
          <NavItemsContainer>
            <NavUnorderedList>
              <StyledLink to="/" darkMode={isDark}>
                <NavListItem>
                  <StyledHomeIcon darkMode={isDark} />
                  <NavListItemTitle>Home</NavListItemTitle>
                </NavListItem>
              </StyledLink>
              <StyledLink to="/trending" darkMode={isDark}>
                <NavListItem>
                  <StyledFireIcon darkMode={isDark} />
                  <NavListItemTitle>Trending</NavListItemTitle>
                </NavListItem>
              </StyledLink>
              <StyledLink to="/gaming" darkMode={isDark}>
                <NavListItem>
                  <StyledGameIcon darkMode={isDark} />
                  <NavListItemTitle>Gaming</NavListItemTitle>
                </NavListItem>
              </StyledLink>
              <StyledLink to="/saved-videos" darkMode={isDark}>
                <NavListItem>
                  <StyledSavedIcon darkMode={isDark} />
                  <NavListItemTitle>Saved videos</NavListItemTitle>
                </NavListItem>
              </StyledLink>
            </NavUnorderedList>
          </NavItemsContainer>
          <NavItemsContainer>
            <NavListItemTitle>CONTACT US</NavListItemTitle>
            <NavUnorderedList horizontal>
              <NavListItem>
                <LogoImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </NavListItem>
              <NavListItem>
                <LogoImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </NavListItem>
              <NavListItem>
                <LogoImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </NavListItem>
            </NavUnorderedList>
            <NavListItemTitle>
              Enjoy! Now to see your channels and recommendations!
            </NavListItemTitle>
          </NavItemsContainer>
        </SideNavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavBar
