import {formatDistanceToNow} from 'date-fns'

import {
  VideoListItem,
  LinkItem,
  ThumbnailImage,
  DetailsContainer,
  ChannelProfileImage,
  VideoTitle,
  ChannelTitle,
  VideoDetailTextConatiner,
} from './styledComponent'

const VideoListItemGenerater = props => {
  const {videoDetails} = props
  const updatedDetails = {
    id: videoDetails.id,
    thumbnailUrl: videoDetails.thumbnail_url,
    publishedAt: videoDetails.published_at,
    title: videoDetails.title,
    viewCount: videoDetails.view_count,
    channelName: videoDetails.channel.name,
    channelProfileImageUrl: videoDetails.channel.profile_image_url,
  }
  const {
    id,
    thumbnailUrl,
    publishedAt,
    title,
    viewCount,
    channelName,
    channelProfileImageUrl,
  } = updatedDetails
  const dateString = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoListItem>
      <LinkItem to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <DetailsContainer>
          <ChannelProfileImage
            src={channelProfileImageUrl}
            alt="channel logo"
          />
          <VideoDetailTextConatiner>
            <VideoTitle>{title}</VideoTitle>
            <ChannelTitle>{channelName}</ChannelTitle>
            <DetailsContainer>
              <ChannelTitle>{viewCount} views </ChannelTitle>
              <ChannelTitle>{dateString} ago</ChannelTitle>
            </DetailsContainer>
          </VideoDetailTextConatiner>
        </DetailsContainer>
      </LinkItem>
    </VideoListItem>
  )
}

export default VideoListItemGenerater
