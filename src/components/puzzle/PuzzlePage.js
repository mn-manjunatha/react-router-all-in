import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as puzzelActions from '../../actions/puzzelActions';


const tableStyle={
  'padding': '50px 50px 50px 50px',
  'width': '60%',
  'height': '200px',
  'border': '3px solid #73AD21',
  'padding': '10px'
}


const buttontablestyle={
  'padding': '50px 50px 50px 50px',
  'width': '60%',
  'height': '200px',
  'border': '3px solid #33E3FF',
  'padding': '10px',
  'text-align':'center',
}

const notSelectedStyle = {
  'padding': '50px 50px 50px 50px',
  color: 'black',
  border: '1px solid #9BABAE',
  'background-color': '#D8AC16'
};

const selectedStyle = {
  'padding': '50px 50px 50px 50px',
  color: 'red',
  border: '1px solid #9BABAE',
  'align':'center',
  'background-color': '#195C93'
};

class PuzzlePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false
    };

    this.saveUP = this.saveUP.bind(this);
    this.saveLeft = this.saveLeft.bind(this);
    this.saveRight = this.saveRight.bind(this);
    this.saveDown = this.saveDown.bind(this);

    this.reset = this.reset.bind(this);
  }


  saveUP(event) {
    this.props.actions.moveItem('up');
  }

  saveLeft(event) {
    this.props.actions.moveItem('left');
  }

  saveRight(event) {
    this.props.actions.moveItem('right');
  }

  saveDown(event) {
    this.props.actions.moveItem('down');
  }

  reset(){
    this.props.actions.moveItem('clear');
  }



  render() {
    let style1, style2, style3, style4, style5, style6, style7, style8, style9;
    style1 = style2 = style3 = style4 = style5 = style6 = style7 = style8 = style9 = notSelectedStyle;

    switch (this.props.selectedItem) {
      case 1: {
        style1 = selectedStyle;
      }
        break;
      case 2: {
        style2 = selectedStyle;
      }
        break;
      case 3: {
        style3 = selectedStyle;
      }
        break;
      case 4: {
        style4 = selectedStyle;
      }
        break;
      case 5: {
        style5 = selectedStyle;
      }
        break;
      case 6: {
        style6 = selectedStyle;
      }
        break;
      case 7: {
        style7 = selectedStyle;
      }
        break;
      case 8: {
        style8 = selectedStyle;
      }
        break;
      case 9: {
        style9 = selectedStyle;
      }
        break;
    }

    return (
      <div >
        <h1>Puzzle</h1>
        <table style={tableStyle}>
          <tr>
            <td style={style1}></td>
            <td style={style2}></td>
            <td style={style3}></td>
          </tr>
          <tr>
            <td style={style4}></td>
            <td style={style5}></td>
            <td style={style6}></td>
          </tr>
          <tr>
            <td style={style7}></td>
            <td style={style8}></td>
            <td style={style9}></td>
          </tr>
        </table>
        <table style={buttontablestyle}>
          <tr>
            <td></td>
            <td><input
              type="submit"
              value={'--up--'}
              className="btn btn-primary"
              onClick={this.saveUP} /> </td>
            <td></td>
          </tr>
          <tr>
            <td><input
              type="submit"
              value={'left'}
              className="btn btn-primary"
              onClick={this.saveLeft} /></td>
            <td></td>
            <td><input
              type="submit"
              value={'right'}
              className="btn btn-primary"
              onClick={this.saveRight} /></td>
          </tr>
          <tr>
            <td></td>
            <td><input
              type="submit"
              value={'down'}
              className="btn btn-primary"
              onClick={this.saveDown} /></td>
            <td></td>
          </tr>
        </table>

        <input
              type="submit"
              value={'reset'}
              className="btn btn-primary"
              onClick={this.reset} />
        

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  debugger;
  
  return {
    selectedItem: state.puzzles.selectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(puzzelActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
//export default PuzzlePage;
