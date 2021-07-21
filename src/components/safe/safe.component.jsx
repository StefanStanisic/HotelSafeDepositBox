import React from 'react';

import "./safe.styles.scss"

import Keyboard from '../keyboard/keyboard.component';
import Screen from '../screen/screen.component';

import { SAFE_SERIAL_NUMBER } from '../../data/safe-data'

const Safe = () => {
    return (
      <div className="safe-container">
        <Screen></Screen>
        <Keyboard></Keyboard>
        <div className="safe-number">S/N: {SAFE_SERIAL_NUMBER}</div>
      </div>
    );
}

export default Safe;