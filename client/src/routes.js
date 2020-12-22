import { Route, Switch } from 'react-router-dom'
import Layout from './layouts/_layout'

import Home from './pages/_index'

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    </Switch>
  )
}

export default Routes
