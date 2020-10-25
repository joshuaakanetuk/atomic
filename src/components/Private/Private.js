import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token'
import DashboardContext from '../../context/DashboardContext'


export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  const context = useContext(DashboardContext)
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken() && !context.error
          ? <Component {...componentProps} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}
