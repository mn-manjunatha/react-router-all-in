import React from 'react';
import Button from './../common/Button';

class SampleComponent extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            disable: false
        };
    }

    buttonClick = () => {
        setTimeout(() => {
            this.setState({ disable: false });
        }, 2000);
        this.setState({ disable: true })
    };

    render() {
        return (
            <div>
                <h1>Higher order componet</h1>
                <Button disable={this.state.disable} buttonClick={this.buttonClick} />
            </div>
        );
    }
}

export default SampleComponent;
