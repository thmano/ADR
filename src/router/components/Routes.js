import PropTypes from 'prop-types'

import { Route } from 'react-router-dom'

const Routes = ({ component: Component, ...rest }) => {
  return <Route {...rest}>{(props) => <Component {...props} />}</Route>
}

const { string, func } = PropTypes

Routes.propTypes = {
  path: string,
  component: func
}

export default Routes
