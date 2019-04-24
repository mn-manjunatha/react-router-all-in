import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import * as types from '../../actions/actionTypes';
import * as actionCreator from '../../actions/langAction';
import messages from './messages';

class MultiLanguage extends React.Component {

  onLangChange = (event) => {
    this.props.changLanguage(event.target.value)
  }

  render() {
    const { lang } = this.props;
    return (
      <div>
        <IntlProvider locale={lang}
          messages={
            messages[lang]
          }>
          <div>
            Multi Language
            <select
              onChange={this.onLangChange}>
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
            <br/>
            <br/>
            <FormattedMessage id="name" defaultMessage="name" />:
            <FormattedMessage id="name" defaultMessage="name">
              {placeholder=>  
                <input type="text"  placeholder={placeholder}/>
                }
            </FormattedMessage>
            <br/>
            <FormattedMessage id="age" defaultMessage="age" />:
            <FormattedMessage id="age" defaultMessage="age">
              {placeholder=>  
                <input type="text"  placeholder={placeholder}/>
                }
            </FormattedMessage>
            <br/>
            <FormattedMessage id="city" defaultMessage="city" />:
            <FormattedMessage id="city" defaultMessage="city">
              {placeholder=>  
                <input type="text"  placeholder={placeholder}/>
                }
            </FormattedMessage>
          </div>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    lang: store.locale.lang,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changLanguage: (id) => dispatch(actionCreator.changLanguage(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiLanguage);

