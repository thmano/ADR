
import { Redirect, Switch } from 'react-router-dom'
import HisotryFile from '../modules/HistoryFile'
import Home from '../modules/Home'
import NewFile from '../modules/NewFile'
import Routes from './components/Routes'

export const BASE_PATH = '/admin/'

const Router = () => (
    <Switch>
         <Routes path={BASE_PATH + '/'} component={Home} />
         <Routes path={BASE_PATH + 'History'} component={HisotryFile} />
         <Routes path={BASE_PATH + 'New'} component={NewFile} />

         <Redirect from="/" to={BASE_PATH} />
    </Switch>
    )

export default Router
