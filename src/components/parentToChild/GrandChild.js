import React from 'react';

class GrandChild extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.title);
        this.state = {
            message: this.props.title
        }
    }

    changeMessage = (event) => {
        this.setState({ message: event.target.value });
    }

    sendMessag = () => {
        this.props.doWhatever(this.state.message);
    }


    render() {
        return (
            <React.Fragment>
                <h2>Grand Child page </h2>
                <div>{this.state.message}</div>
                <input onChange={this.changeMessage} type="text" value={this.state.message} />
                <button onClick={this.sendMessag}>Send to parent</button>
            </React.Fragment>
        );
    }
}

export default GrandChild;
