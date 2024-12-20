import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoListItemGenerater from '../VideoListItemGenerater'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  HomeContentContainer,
  HomeBannerContainer,
  BannerTextContainer,
  BannerWebsiteLogo,
  BannerText,
  BannerGetButton,
  BannerCloseButton,
  HomeVideoContainer,
  InputFieldContainer,
  InputField,
  SearchButtonContainer,
  NoResultContainer,
  NoResultImage,
  NoResultSubTitle,
  NoResultTitle,
  NoResultButton,
  VideoUnOrderedListContainer,
} from './styledComponents'

class HomeRoute extends Component {
  state = {
    searchInput: '',
    fetchFailed: false,
    videosList: [],
    fetchCompleted: false,
    isLoading: false,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({isLoading: true})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = ` https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.onFetchFailure()
    }
  }

  onFetchSucess = videos => {
    this.setState({videosList: videos, fetchCompleted: true})
  }

  onFetchFailure = () => {
    this.setState({fetchFailed: true})
  }

  onChangeSearch = event => {
    const searchText = event.target.value.toLowerCase()
    this.setState({searchInput: searchText})
  }

  onSearchInput = () => {
    this.getVideoData()
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {
      fetchFailed,
      videosList,
      fetchCompleted,
      isLoading,
      showBanner,
    } = this.state
    const noSearchResult = videosList.length === 0 && fetchCompleted

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <HomeContainer>
                <SideNavBar />
                <HomeContentContainer data-testid="home" darkMode={isDark}>
                  {showBanner && (
                    <HomeBannerContainer data-testid="banner">
                      <BannerTextContainer>
                        <BannerWebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerGetButton type="button">
                          GET IT NOW
                        </BannerGetButton>
                      </BannerTextContainer>
                      <BannerCloseButton
                        type="button"
                        onClick={this.closeBanner}
                        data-testid="close"
                      >
                        <IoMdClose />
                      </BannerCloseButton>
                    </HomeBannerContainer>
                  )}
                  <HomeVideoContainer darkMode={isDark}>
                    <InputFieldContainer darkMode={isDark}>
                      <InputField
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearch}
                        darkMode={isDark}
                      />
                      <SearchButtonContainer
                        type="button"
                        onClick={this.onSearchInput}
                        darkMode={isDark}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </SearchButtonContainer>
                    </InputFieldContainer>
                    <div>
                      {fetchFailed && (
                        <NoResultContainer>
                          <NoResultImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                            alt="failure view"
                          />
                          <NoResultTitle>
                            Oops! Something Went Wrong
                          </NoResultTitle>
                          <NoResultSubTitle>
                            We are having some trouble
                          </NoResultSubTitle>
                          <NoResultButton
                            type="button"
                            onClick={this.getVideoData}
                          >
                            Retry
                          </NoResultButton>
                        </NoResultContainer>
                      )}
                      {noSearchResult && (
                        <NoResultContainer>
                          <NoResultImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                            alt="no videos"
                          />
                          <NoResultTitle>No Search results found</NoResultTitle>
                          <NoResultSubTitle>
                            Try different key words or remove search filter
                          </NoResultSubTitle>
                          <NoResultButton
                            type="button"
                            onClick={this.getVideoData}
                          >
                            Retry
                          </NoResultButton>
                        </NoResultContainer>
                      )}
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
                      {fetchCompleted && (
                        <VideoUnOrderedListContainer>
                          {videosList.map(eachVideoDetail => (
                            <VideoListItemGenerater
                              videoDetails={eachVideoDetail}
                              key={eachVideoDetail.id}
                            />
                          ))}
                        </VideoUnOrderedListContainer>
                      )}
                    </div>
                  </HomeVideoContainer>
                </HomeContentContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
