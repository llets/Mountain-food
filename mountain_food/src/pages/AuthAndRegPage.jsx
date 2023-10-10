import {React, useContext} from 'react'
import {Context} from '../index'
import {useNavigate} from 'react-router-dom'
import AuthRegCard from '../component/AuthRegCard'

const AuthAndRegPage = () => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  return (
    <>
      <AuthRegCard/>
    </>
  );
}

export default AuthAndRegPage