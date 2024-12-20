import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {FaRegThumbsUp, FaRegThumbsDown, FaRegSave} from 'react-icons/fa'

export const MainContainer = styled.div`
  display: flex;
  background-color: ${props => (props.darkMode ? '#0f0f0f ' : '#f9f9f9 ')};
`
export const ContentContainer = styled.div`
  padding: 30px;
  background-color: ${props => (props.darkMode ? '#181818' : '#e2e8f0')};
  color: ${props => (props.darkMode ? '#e2e8f0' : '#181818')};
  min-height: 70vh;
  width: 100%;
`
export const NoResultContainer = styled.div`
  padding: 30px;
  width: 80%;
`
export const NoResultImage = styled.img`
  width: 50%;
`
export const NoResultTitle = styled.h1`
  color: #212121;
  font-weight: 500;
  font-family: 'Roboto;
`
export const NoResultSubTitle = styled.p`
  color: #231f20;
  font-weight: 500;
  font-family: 'Roboto;
`
export const NoResultButton = styled.button`
  color: #e2e8f0;
  background-color: #4f46e5;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  font-family: 'Roboto';
  cursor: pointer;
`
export const ReactVideoPlayer = styled(ReactPlayer)`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  margin-bottom: 20px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const RowContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.spaceBetween ? 'space-between' : 'flex-start'};
`
export const ParaEle = styled.p`
  font-size: 12px;
  margin-right: 10px;
`
export const LikeLogo = styled(FaRegThumbsUp)`
  font-size: 14px;
  margin-right: 10px;
`
export const DisLikeLogo = styled(FaRegThumbsDown)`
  font-size: 14px;
  margin-right: 10px;
`
export const SaveLogo = styled(FaRegSave)`
  font-size: 14px;
  margin-right: 10px;
`
export const ActivityButton = styled.button`
  border: none;
  font-size: 15px;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  color: ${[props => (props.onToggled ? '#2563eb ' : '#64748b ')]};
`
export const ChannelProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`
