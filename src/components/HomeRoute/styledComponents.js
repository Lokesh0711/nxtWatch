import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
`
export const HomeContentContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.darkMode ? '#181818 ' : '#f9f9f9 ')};
`
export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const BannerTextContainer = styled.div`
  width: 50%;
`
export const BannerWebsiteLogo = styled.img`
  width: 200px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
`

export const BannerGetButton = styled.button`
  background-color: transparent;
  color: #231f20;
  padding: 10px;
  border: 1px solid #231f20;
  border-radius: 2px;
  font-weight: 600;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
`

export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#181818 ' : '#f9f9f9 ')};
  min-height: 70vh;
  padding: 20px;
  border-radius: 5px;
`
export const InputFieldContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f1f5f9')};
  border: 1px solid #616e7c;
  width: 50%;
`
export const SearchButtonContainer = styled.button`
  background-color: ${props => (props.darkMode ? '#231f20' : '#f1f1f1')};
  padding: 10px;
  border: none;
  width: 20%;
  margin-top: 0px;
`
export const InputField = styled.input`
  outline: none;
  border: none;
  color: #94a3b8;
  padding: 10px;
  width: 80%;
  background-color: transparent;
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
export const VideoUnOrderedListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
