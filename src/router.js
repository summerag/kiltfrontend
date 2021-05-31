import {Switch, Route} from 'react-router-dom'
import Players from './components/players'
import Teams from './components/teams'
import Schedule from './components/schedule'

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
      </Switch>
    )
}

export default router