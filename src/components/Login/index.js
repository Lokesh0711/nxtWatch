import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  HomeContainer,
  ImageEle,
  InputFieldContainer,
  LabelEle,
  InputFiled,
  FormContainer,
  CheckboxInput,
  RowContainer,
  LoginButton,
  ErrorMesg,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    failedMesg: '',
    loginFailed: false,
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSucessSubmit = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailure = errorMesg => {
    this.setState({loginFailed: true, failedMesg: errorMesg})
  }

  onLoginSubmited = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSucessSubmit(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {showPassword, loginFailed, failedMesg} = this.state
    const passwordInputType = showPassword ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <HomeContainer>
        <HomeContainer card>
          <ImageEle
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onLoginSubmited}>
            <InputFieldContainer>
              <LabelEle htmlFor="username">USERNAME</LabelEle>
              <InputFiled
                type="text"
                id="username"
                onChange={this.onChangeUserName}
              />
            </InputFieldContainer>
            <InputFieldContainer>
              <LabelEle htmlFor="password">PASSWORD</LabelEle>
              <InputFiled
                type={passwordInputType}
                id="password"
                onChange={this.onChangePassword}
              />
              <RowContainer>
                <CheckboxInput
                  type="checkbox"
                  id="showPassword"
                  onClick={this.onShowPassword}
                />
                <LabelEle htmlFor="showPassword">Show Password</LabelEle>
              </RowContainer>
              <LoginButton type="submit">Login</LoginButton>
              {loginFailed && <ErrorMesg>*{failedMesg}</ErrorMesg>}
            </InputFieldContainer>
          </FormContainer>
        </HomeContainer>
      </HomeContainer>
    )
  }
}
export default Login
