import {Route, Redirect, Switch} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import HomeRoute from './components/HomeRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetailsRoute from './components/VideoDetailsRoute'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedVideoList: []}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  editSavedVideoList = videoDetails => {
    const {savedVideoList} = this.state
    const availabilityCheck = savedVideoList.filter(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (availabilityCheck.length > 0) {
      console.log('Already saved')
    } else {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, videoDetails],
      }))
    }
  }

  render() {
    const {isDark, savedVideoList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
          savedVideoList,
          changeTheme: this.changeTheme,
          editSavedVideoList: this.editSavedVideoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
