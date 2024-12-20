import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoListItemGenerater from '../VideoListItemGenerater'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  ContentContainer,
  TitleContainer,
  TitleLogoContainer,
  StyledFireIcon,
  Title,
  ResultContainer,
  VideoUnorderedList,
  NoResultContainer,
  NoResultImage,
  NoResultTitle,
  NoResultSubTitle,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideoList} = value
      const noVideos = savedVideoList.length === 0
      return (
        <>
          <Header />
          <MainContainer darkMode={isDark} data-testid="savedVideos">
            <SideNavBar />
            <ContentContainer>
              <TitleContainer darkMode={isDark}>
                <TitleLogoContainer darkMode={isDark}>
                  <StyledFireIcon />
                </TitleLogoContainer>
                <Title darkMode={isDark}>Saved Videos</Title>
              </TitleContainer>
              <ResultContainer darkMode={isDark}>
                {!noVideos && (
                  <VideoUnorderedList>
                    {savedVideoList.map(eachVideo => (
                      <VideoListItemGenerater
                        key={eachVideo.id}
                        videoDetails={eachVideo}
                      />
                    ))}
                  </VideoUnorderedList>
                )}
                {noVideos && (
                  <NoResultContainer>
                    <NoResultImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoResultTitle darkMode={isDark}>
                      No saved videos found
                    </NoResultTitle>
                    <NoResultSubTitle darkMode={isDark}>
                      You can save your videos while watching them
                    </NoResultSubTitle>
                  </NoResultContainer>
                )}
              </ResultContainer>
            </ContentContainer>
          </MainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default SavedVideos
