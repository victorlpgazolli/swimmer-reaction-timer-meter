import React from 'react'
import { Route, Switch, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import LoginPage from 'pages/Login';
import App from 'App';
import { DevicesProvider } from 'contexts';
import SwimmersPage from 'pages/Swimmers';
import AddSwimmerPage from 'pages/AddSwimmer';


const CloseButton = ({ closeToast }) => <i onClick={closeToast} className="la la-close notifications-close" />

const PrivateRoute = ({ dispatch, component, ...rest }) => {
    // if (!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
    //     dispatch(logoutUser());
    //     return (<Redirect to="/login"/>)
    // } 

    return ( // eslint-disable-line
        <Route {...rest} render={props => (React.createElement(component, props))} />
    );
};

function Router() {
    return (
        <>
            <DevicesProvider>
                <HashRouter>
                    <Switch>
                        {/* <Route path="/" exact render={() => <Redirect to="/app/main" />} />
                    <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
                    <PrivateRoute path="/app" component={LayoutComponent} /> */}
                        {/* <Route path="/register" exact component={Register} /> */}
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/nadadores" exact component={SwimmersPage} />
                        <Route path="/nadadores/adicionar" exact component={AddSwimmerPage} />
                        <Route path="/a" exact component={App} />
                        {/* <Route path="/error" exact component={ErrorPage} />
                    <Route component={ErrorPage} />
                    <Redirect from="*" to="/app/main/dashboard" /> */}
                    </Switch>
                </HashRouter>
            </ DevicesProvider>
        </>
    )
}

export default Router