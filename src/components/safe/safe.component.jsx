import React from 'react';

import "./safe.styles.scss"

import Keyboard from '../keyboard/keyboard.component';
import Screen from '../screen/screen.component';

const Safe = () => {
  return (
    <div className="safe-container">
      <Screen></Screen>
      <Keyboard></Keyboard>
    </div>
  );
}

export default Safe;