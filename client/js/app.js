import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.dev'; // Redux Store Config
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Router,
    Route,
    Switch
} from 'react-router-dom';
// import history from './history';
// import {hashHistory} from 'react-router-redux';
// import routes from './routes';
import {loadContents} from './actions/contentActions';

const store = configureStore();
store.dispatch(loadContents());

{/*<Provider store={store}>*/}
    {/*<BrowserRouter history={hashHistory} routes={routes} />*/}
{/*</Provider>,*/}

import createMemoryHistory from 'history/createMemoryHistory';
const history = createMemoryHistory();

import App from './components/App';
import HomePage from './components/home/HomePage';
import ContentsPage from './components/content/ContentsPage';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom/modules
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="homepage" component={HomePage} />
                        <Route path="contents" component={ContentsPage} />
                    </Switch>
                </div>
            </Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById('reactEntry')
);