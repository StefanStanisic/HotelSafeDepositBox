import React from 'react';
import { connect } from 'react-redux';
import { setPassword, setScreenActive } from '../../redux/actions';

import './key.styles.scss';

const Key = ( props ) => {

  const handleClick = e => {
		const { password, serviceMode } = props;
		let trimmedPassword = `${password}${
			e.target.innerHTML
		}`;
		trimmedPassword = serviceMode
			? trimmedPassword
			: trimmedPassword.substring(
					trimmedPassword.length - 6,
					trimmedPassword.length
			  );
		props.debouncedHandler();
		props.debouncedHandlerIdleScreen();
		props.dispatch(setScreenActive(true));
		props.dispatch(setPassword(trimmedPassword));
	};

  return (
    <button 
      type="text"
      style={{order: props.data.order}} 
      className="safe-key"
      onClick={e => handleClick(e)}
      >
      { props.data.val }
    </button>
  )
};

const mapStateToProps = store => {
  return {
    password: store.password,
    serviceMode: store.serviceMode
  };
};

export default connect(mapStateToProps)(Key);