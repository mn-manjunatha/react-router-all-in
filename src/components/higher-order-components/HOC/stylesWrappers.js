import React from 'react';
import commonStyles from '../../../styles/commonStyles';

const trnslateProps =(props) => {
    debugger;
    let _styles = {...commonStyles.default}
    if(props.disable){
        _styles = {..._styles, ...commonStyles.disable}
    }

    const newProps = {...props, styles:_styles}
    return newProps;
}

export default (WrappedComponent)=>{
    debugger;
    let x = commonStyles;
    
    return function wrappedRender(args) {
        debugger;
        return WrappedComponent(trnslateProps(args));
    }

}


