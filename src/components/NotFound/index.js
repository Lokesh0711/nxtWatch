import Header from '../Header'
import SideNavBar from '../SideNavBar'

import {
  MainContainer,
  NoResultContainer,
  NoResultImage,
  NoResultTitle,
  NoResultSubTitle,
} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <MainContainer>
      <SideNavBar />
      <NoResultContainer>
        <NoResultImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NoResultTitle>Page Not Found</NoResultTitle>
        <NoResultSubTitle>
          we are sorry, the page you requested could not be found.
        </NoResultSubTitle>
      </NoResultContainer>
    </MainContainer>
  </>
)

export default NotFound
