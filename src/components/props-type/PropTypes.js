import React from 'react';
import PropTypes from 'prop-types';

const Test =(props)=>{
  return(
    <div>
    <h2>{props.str}</h2>
    <h2>{props.bool?'bool':'non bool'}</h2>
    <h2>{props.strOrNumber}</h2>
    <div>{
      props.ary.map((val)=>{
        return(
        <li key={val}>{val}</li>
        )
      })}
    </div>
    <div>{
      props.aryOfObj.map((val)=>{
        return(
        <li key={val.age}>{val.name}</li>
        )
      })}
    </div>
    <h1>{props.children}</h1>
    </div>
  )

}

Test.propTypes ={
  str:PropTypes.string,
  bool:PropTypes.bool,
  strOrNumber:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  ary:PropTypes.arrayOf(PropTypes.number),
  aryOfObj:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string,
    age:PropTypes.number
  })),
  children:PropTypes.element.isRequired,
}


class PropTypesCom extends React.Component {
  render() {
    return (
      <div>
        <h1>Props Type</h1>
        <Test str={'React'}
        bool
        strOrNumber={1111}
        ary={[1,2,3]}
        aryOfObj={[{name:'Mnm',age:25},{name:'Rao',age:28}]}>
        <div>Children</div>
        </Test>
      </div>
    );
  }
}

export default PropTypesCom;
