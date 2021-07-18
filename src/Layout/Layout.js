import React, { Suspense } from 'react'
import routes from '../routes'
import Header from './Header'
import {
    BrowserRouter as Router,
    Route, Switch, Redirect
} from 'react-router-dom';
const Layout = () => {
    return (
        <div>
            <Router>
                <Header />
                <hr />
                <div className="container">
                    <Suspense fallback={<div>Loading... </div>}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <route.component {...props} />
                                        )} />
                                ) : (null);
                            })}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Suspense>
                </div>

                <hr />
            </Router>
        </div>
    )
}
export default Layout;
