import React from 'react';

const Temp = (props) =>{
    console.log('render temp');
    return(
        <div>{props.test}</div>
    );
}

//class PureComponent extends React.Component {
class PureComponent extends React.PureComponent {
    state={
        val:1
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})
            //this.setState({val:Math.random()})

        },2000);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('nextState: ',nextState)
    //     console.log('current state: ',this.state);
       
    //     return (this.state.val === nextState.val? false: true);
    //   }

  render() {
      console.log('render parent')
    return (
      <div>
        <h1>Pure component</h1>
        <Temp test={this.state.val}/>
      </div>
    );
  }
}

export default PureComponent;
