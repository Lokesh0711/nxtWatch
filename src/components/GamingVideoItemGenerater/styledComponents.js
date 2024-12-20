import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
`
export const ThumbnailImg = styled.img`
  width: 200px;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 0px;
  color: ${props => (props.darkMode ? '#f1f1f1' : '#000000')};
`
export const ViewsCount = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  color: ${props => (props.darkMode ? '#94a3b8' : '#000000')};
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
