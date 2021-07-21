import React, { Component} from 'react'
import { connect } from 'react-redux';

import './keyboard.styles.scss';

import { 
  setServiceMode,
  lockSafe,
  readScreenMessage,
  savePassword,
  setPassword,
  setScreenActive,
  setScreenMessage
} from '../../redux/actions'

import Key from '../key/key.component';
import {API, SAFE_SERIAL_NUMBER} from '../../data/safe-data';
import { debounce } from '../../utils';

class Keyboard extends Component {
	validateCode = code => {
		fetch(`${API}${code}`).then(response => {
			if (response.data === SAFE_SERIAL_NUMBER) {
				this.props.dispatch(setScreenMessage('Unlocking'));
				setTimeout(() => {
					this.props.dispatch(setScreenMessage('Ready'));
					setTimeout(() => {
						this.props.dispatch(readScreenMessage(false));
					}, 1200);
					this.props.dispatch(lockSafe(false));
					this.props.dispatch(setServiceMode(false));
				}, 3000);
			} else {
				this.props.dispatch(setScreenMessage('Error'));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1200);
			}
		});
	};

	handlePassword() {
		const {
			savedPassword,
			safeLocked,
			password,
			serviceMode
		} = this.props;
		this.props.dispatch(setScreenActive(true));
		this.props.dispatch(readScreenMessage(true));

		if (serviceMode) {
			this.validateCode(password);
			this.props.dispatch(setPassword(''));
			return;
		}
		if (safeLocked) {
			if (password === '000000' && savedPassword !== '000000') {
				this.props.dispatch(setScreenMessage('Service'));
				this.props.dispatch(setServiceMode(true));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1200);
			} else if (savedPassword === password) {
				this.props.dispatch(setScreenMessage('Unlocking'));
				setTimeout(() => {
					this.props.dispatch(setScreenMessage('Ready'));
					setTimeout(() => {
						this.props.dispatch(readScreenMessage(false));
					}, 1200);
					this.props.dispatch(lockSafe(false));
				}, 3000);
			} else {
				this.props.dispatch(setScreenMessage('Error'));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1200);
			}
		} else {
			if (password.length === 6) {
				this.props.dispatch(savePassword(password));
				this.props.dispatch(setScreenMessage('Locking'));
				setTimeout(() => {
					this.props.dispatch(lockSafe(true));
					this.props.dispatch(setScreenMessage('Ready'));
					setTimeout(() => {
						this.props.dispatch(readScreenMessage(false));
					}, 1200);
				}, 3000);
			} else {
				this.props.dispatch(setScreenMessage('Error'));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1200);
			}
		}
		this.props.dispatch(setPassword(''));
	}

	handleIdleScreen() {
		this.props.dispatch(setScreenActive(false));
	}

	debouncedHandler = debounce(this.handlePassword.bind(this), 1200);
	debouncedHandlerIdleScreen = debounce(
		this.handleIdleScreen.bind(this),
		5000
	);

  renderKeys = () => {
		const keys = [
			{ val: '0', order: '5' },
			{ val: '1', order: '3' },
			{ val: '2', order: '3' },
			{ val: '3', order: '3' },
			{ val: '4', order: '2' },
			{ val: '5', order: '2' },
			{ val: '6', order: '2' },
			{ val: '7', order: '1' },
			{ val: '8', order: '1' },
			{ val: '9', order: '1' },
			{ val: '*', order: '4' },
			{ val: 'L', order: '6' }
		];

		return keys.map(key => (
			<Key
				debouncedHandler={this.debouncedHandler}
				debouncedHandlerIdleScreen={this.debouncedHandlerIdleScreen}
				data={key}
				key={key.val}
			/>
		));
	};

	render() {
		return <div className="keyboard-container">{this.renderKeys()}</div>;
	}
}

const mapStateToProps = store => {
  return {
    password: store.password,
    screenStatusMessage: store.screenStatusMessage,
    savedPassword: store.savedPassword,
    safeLocked: store.safeLocked,
    serviceMode: store.serviceMode
  };
};

export default connect(mapStateToProps)(Keyboard);