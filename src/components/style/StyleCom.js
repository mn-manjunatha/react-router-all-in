import React from 'react';
import './myStyle.css';
import styles from './myStyle.module.css';

class StyleCom extends React.Component {

state={first:true};


inLine = {
    fontsize: '70px',
    color: 'blue'
  }

  render() {
      let className = this.state.first == true?'primary': '';

    return (
      <div>
        <h1 className={`${className} font-xl`}>Style sheet class</h1>
        <h1 style={this.inLine} >Inline</h1>

        <h2 className={styles.success}>Success </h2>
        <h2 className='error'>Failure </h2>
      </div>
    );
  }
}

export default StyleCom;
