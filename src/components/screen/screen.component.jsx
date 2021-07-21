import React from 'react';
import { connect } from 'react-redux';

import "./screen.styles.scss"

const Screen = props => {
  return (
    <div className={ props.screenActive 
      ? 'screen-container active'
      : 'screen-container inactive'}
      >
      <div className='small-screen'>{ props.safeLocked ? 'Locked' : 'Unlocked'}</div>
      <div className='big-screen'>{ props.readScreenMessage ? props.screenStatusMessage : props.password}</div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    password: store.password,
    screenStatusMessage: store.screenStatusMessage,
    screenActive: store.screenActive,
    safeLocked: store.safeLocked,
    readScreenMessage: store.readScreenMessage
  };
};

export default connect(mapStateToProps)(Screen);