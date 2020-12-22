import { Route, Switch } from 'react-router-dom'
import Layout from './layouts/_layout'

import Home from './pages/_index'
import About from './pages/about'

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Layout>
    </Switch>
  )
}

export default Routes
