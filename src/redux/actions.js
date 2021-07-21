import ACTION_TYPES from "./types";

export const setScreenMessage = (message) => {
  return {
    type: ACTION_TYPES.SET_SCREEN_MESSAGE,
    payload: message
  };
};

export const setScreenActive = (active) => {
  return {
    type: ACTION_TYPES.SCREEN_ACTIVE,
    payload: active
  };
};

export const setServiceMode = (mode) => {
  return {
    type: ACTION_TYPES.SERVICE_MODE,
    payload: mode
  };
};

export const lockSafe = (lock) => {
  return {
    type: ACTION_TYPES.SAFE_LOCK,
    payload: lock
  };
};

export const savePassword = (password) => {
  return {
    type: ACTION_TYPES.SAVE_PASSWORD,
    payload: password
  };
};

export const setPassword = (password) => {
  return {
    type: ACTION_TYPES.SET_PASSWORD,
    payload: password
  };
};

export const readScreenMessage = (message) => {
  return {
    type: ACTION_TYPES.READ_SCREEN_MESSAGE,
    payload: message
  };
};