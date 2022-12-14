/** 2 */
import React from 'react'
import { Route } from 'react-router-dom'
import FrontendLayout from '../layout/frontend/FrontendLayout'

const FrontendPublicRoute = ({...rest}) => {
  return (
    <>
      <Route {...rest} render={ (props) => <FrontendLayout {...props} /> } />
      
    </>
  )
}

export default FrontendPublicRoute


