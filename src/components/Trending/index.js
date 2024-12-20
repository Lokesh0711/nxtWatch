import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoListItemGenerater from '../VideoListItemGenerater'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  TitleContainer,
  TitleLogoContainer,
  StyledFireIcon,
  Title,
  ContentContainer,
  NoResultContainer,
  NoResultImage,
  NoResultTitle,
  NoResultSubTitle,
  NoResultButton,
  VideoUnOrderedListContainer,
  ResultContainer,
} from './styledComponents'

class Trending extends Component {
  state = {
    isLoading: false,
    datafetchedCompleted: false,
    videosDetails: [],
    fetchFailed: false,
  }

  componentDidMount() {
    this.getVediosList()
  }

  getVediosList = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    this.setState({isLoading: false})
    if (response.ok) {
      const data = await response.json()
      this.onFetchSucess(data.videos)
    } else {
      this.onFetchFailed()
    }
  }

  onFetchSucess = videoslist => {
    this.setState({videosDetails: videoslist, datafetchedCompleted: true})
  }

  onFetchFailed = () => {
    this.setState({fetchFailed: true})
  }

  render() {
    const {
      isLoading,
      datafetchedCompleted,
      fetchFailed,
      videosDetails,
    } = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <MainContainer darkMode={isDark} data-testid="trending">
                <SideNavBar />
                <ContentContainer darkMode={isDark}>
                  <TitleContainer darkMode={isDark}>
                    <TitleLogoContainer darkMode={isDark}>
                      <StyledFireIcon />
                    </TitleLogoContainer>
                    <Title darkMode={isDark}>Trending</Title>
                  </TitleContainer>

                  <ResultContainer darkMode={isDark}>
                    {isLoading && (
                      <div className="loader-container" data-testid="loader">
                        <Loader
                          type="ThreeDots"
                          color="#ffffff"
                          height="50"
                          width="50"
                        />
                      </div>
                    )}
                    {fetchFailed && (
                      <NoResultContainer>
                        <NoResultImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                          alt="failure view"
                        />
                        <NoResultTitle darkMode={isDark}>
                          Oops! Something Went Wrong
                        </NoResultTitle>
                        <NoResultSubTitle darkMode={isDark}>
                          We are having some throuble to complete your request.{' '}
                          <br /> Please try again.{' '}
                        </NoResultSubTitle>
                        <NoResultButton
                          type="button"
                          onClick={this.getVideoData}
                        >
                          Retry
                        </NoResultButton>
                      </NoResultContainer>
                    )}
                    {datafetchedCompleted && (
                      <VideoUnOrderedListContainer>
                        {videosDetails.map(eachVideoDetails => (
                          <VideoListItemGenerater
                            key={eachVideoDetails.id}
                            videoDetails={eachVideoDetails}
                          />
                        ))}
                      </VideoUnOrderedListContainer>
                    )}
                  </ResultContainer>
                </ContentContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
