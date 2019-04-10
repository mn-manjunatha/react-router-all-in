import React from 'react';

class ErrorBoundry extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        //in console you can see error and object
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h1>Something went wrong</h1>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
