import React from 'react';
import Hero from './Hero';

import ErrorBoundry from './ErrorBoundry';

const ErrorCom = () => {
    return (
        <React.Fragment>
        <h1>Error Handling</h1>
        <ErrorBoundry>
        <Hero heroName={'Batman'}/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName={'Superman'}/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName={'Joker'}/>
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroName={'Joker'}/>
        </ErrorBoundry>
        </React.Fragment>
    );
}

export default ErrorCom; 