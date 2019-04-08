import React from 'react';
import { connect } from 'react-redux';

import * as types from '../../actions/actionTypes';
import * as actionCreator from '../../actions/firstAction';

//import * as types from '../actions/actionTypes';

class ReactRedux extends React.Component {

  histroyItem = {
    listStyleType: 'none',
    border: '1px solid #f9e5ad',
    margin: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#f7e8bc70',
  }

  // histroyItem={
  //   'list-style-type': 'none',
  //   border:'1px solid #f9e5ad',
  //   margin: '10px',
  //   'padding-top': '10px',
  //   'padding-bottom':'10px',
  //   'background-color': '#f7e8bc70',
  // }

  render() {
    return (
      <div>
        <h1>React Redux Update State Immutable way</h1>
        <div>Age<span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUP}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Close</button>
        <hr />
        <div>History </div>
        <div>
          <ul>
            {
              this.props.history.map(el => (
                <li style={this.histroyItem} key={el.id}
                  onClick={() => this.props.onDelItem(el.id)}>
                  {el.age}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    age: store.first.age,
    history: store.first.history,
    loading:store.first.loading
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUP: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    onDelItem: (id) => dispatch(actionCreator.delHIstory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
