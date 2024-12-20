import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  margin-bottom: 10px;
  margin-right: 10px;
  width: 300px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 2px;
`
export const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
export const ChannelProfileImage = styled.img`
  margin-right: 10px;
  width: 40px;
`
export const VideoTitle = styled.p`
  color: #383838;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ChannelTitle = styled.p`
  color: #606060;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-right: 10px;
`
export const VideoDetailTextConatiner = styled.div`
  padding: 0px;
  margin: 0px;
`
