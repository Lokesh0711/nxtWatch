import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: ${props => (props.card ? null : '100vh')};
  width: ${props => (props.card ? '40%' : null)};
  box-shadow: ${props =>
    props.card ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : null};
`
export const ImageEle = styled.img`
  width: 40%;
`
export const InputFieldContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const FormContainer = styled.form`
  width: 80%;
`

export const LabelEle = styled.label`
  margin-bottom: 0px;
  color: #475569;
`
export const InputFiled = styled.input`
  outline: none;
  border: 1px solid #475569;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
`
export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
`
export const RowContainer = styled.div`
  display: flex;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  width: 80%;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`
export const ErrorMesg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 0px;
`
