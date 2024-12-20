import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import Header from '../Header'
import SideNavBar from '../SideNavBar'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  ContentContainer,
  NoResultContainer,
  NoResultButton,
  NoResultImage,
  NoResultTitle,
  NoResultSubTitle,
  VideoDetailsContainer,
  Title,
  RowContainer,
  ParaEle,
  LikeLogo,
  DisLikeLogo,
  SaveLogo,
  ActivityButton,
  ChannelProfileImage,
} from './styledComponents'

class VideoDetailsRoute extends Component {
  state = {
    isLoading: false,
    fetchFailed: false,
    fetchCompleted: false,
    fetchedDetails: [],
    disLikeVideo: false,
    likeVideo: false,
    rawVideodetails: [],
  }

  componentDidMount() {
    this.getVideoDeytails()
  }

  getVideoDeytails = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
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
      this.setState({rawVideodetails: data.video_details})
      this.onFetchSucess(data.video_details)
    } else {
      this.onFetchFailure()
    }
  }

  onFetchSucess = videoDetails => {
    const dateDistance = formatDistanceToNow(
      new Date(videoDetails.published_at),
    )

    const updatedVideoDetails = {
      channelName: videoDetails.channel.name,
      channelProfileImageUrl: videoDetails.channel.profile_image_url,
      channelSubscriberCount: videoDetails.channel.subscriber_count,
      description: videoDetails.description,
      id: videoDetails.id,
      publishedAt: dateDistance,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    this.setState({fetchedDetails: updatedVideoDetails, fetchCompleted: true})
  }

  onFetchFailure = () => {
    this.setState({fetchFailed: true})
  }

  onClickLikeButton = () => {
    this.setState({disLikeVideo: false})
    this.setState(prevSate => ({likeVideo: !prevSate.likeVideo}))
  }

  onClickDisLikeButton = () => {
    this.setState({likeVideo: false})
    this.setState(prevSate => ({disLikeVideo: !prevSate.disLikeVideo}))
  }

  render() {
    const {
      fetchedDetails,
      isLoading,
      fetchFailed,
      fetchCompleted,
      disLikeVideo,
      likeVideo,
      rawVideodetails,
    } = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channelProfileImageUrl,
      channelName,
      channelSubscriberCount,
      description,
    } = fetchedDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, editSavedVideoList} = value
          let saveButtonClicked = false

          const onClickSaveButton = () => {
            editSavedVideoList(rawVideodetails)
            saveButtonClicked = true
          }

          return (
            <>
              <Header />
              <MainContainer darkMode={isDark} data-testid="videoItemDetails">
                <SideNavBar />
                <ContentContainer darkMode={isDark}>
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
                      <NoResultTitle>Oops! Something Went Wrong</NoResultTitle>
                      <NoResultSubTitle>
                        We are having some throuble to complete your request.{' '}
                        <br /> Please try again.{' '}
                      </NoResultSubTitle>
                      <NoResultButton type="button" onClick={this.getVideoData}>
                        Retry
                      </NoResultButton>
                    </NoResultContainer>
                  )}
                  {fetchCompleted && (
                    <>
                      <ReactPlayer url={videoUrl} />
                      <VideoDetailsContainer>
                        <Title>{title}</Title>
                        <RowContainer spaceBetween="true">
                          <RowContainer>
                            <ParaEle>{viewCount} views</ParaEle>
                            <ParaEle>. {publishedAt} ago</ParaEle>
                          </RowContainer>
                          <RowContainer>
                            <ActivityButton
                              type="button"
                              darkMode={isDark}
                              onClick={this.onClickLikeButton}
                              onToggled={likeVideo}
                            >
                              <LikeLogo />
                              <ParaEle>Like</ParaEle>
                            </ActivityButton>
                            <ActivityButton
                              type="button"
                              darkMode={isDark}
                              onClick={this.onClickDisLikeButton}
                              onToggled={disLikeVideo}
                            >
                              <DisLikeLogo />
                              <ParaEle>Dislike</ParaEle>
                            </ActivityButton>
                            <ActivityButton
                              type="button"
                              darkMode={isDark}
                              onClick={onClickSaveButton}
                              onToggled={saveButtonClicked}
                            >
                              <SaveLogo />
                              <ParaEle>Save</ParaEle>
                            </ActivityButton>
                          </RowContainer>
                        </RowContainer>
                      </VideoDetailsContainer>
                      <hr />
                      <VideoDetailsContainer>
                        <RowContainer>
                          <ChannelProfileImage
                            src={channelProfileImageUrl}
                            alt="channel logo"
                          />
                          <div>
                            <Title>{channelName}</Title>
                            <ParaEle>
                              {channelSubscriberCount} subscribers
                            </ParaEle>
                            <ParaEle>{description}</ParaEle>
                          </div>
                        </RowContainer>
                      </VideoDetailsContainer>
                    </>
                  )}
                </ContentContainer>
              </MainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetailsRoute
