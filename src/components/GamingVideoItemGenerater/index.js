import ThemeContext from '../../context/ThemeContext'

import {
  ListItem,
  ThumbnailImg,
  Title,
  ViewsCount,
  LinkItem,
} from './styledComponents'

const GamingVideoItemGenerater = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {videoDetails} = props
      const thumbnailDetails = {
        id: videoDetails.id,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
      }
      const {id, thumbnailUrl, title, viewCount} = thumbnailDetails
      return (
        <ListItem>
          <LinkItem to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <Title darkMode={isDark}>{title}</Title>
            <ViewsCount darkMode={isDark}>
              {viewCount} Watching Worldwide
            </ViewsCount>
          </LinkItem>
        </ListItem>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingVideoItemGenerater
