import {Switch, Route} from 'react-router-dom'
import Players from './components/players/players'
import Teams from './components/teams/teams'
import Schedule from './components/schedule/schedule'
import Home from './components/home/home'

const router = () => {
    return(
      <Switch>
        <Route path='/players'>
          <Players />
        </Route>
        <Route path='/teams'>
          <Teams />
        </Route>
        <Route path='/schedule'>
            <Schedule />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    )
}

export default router