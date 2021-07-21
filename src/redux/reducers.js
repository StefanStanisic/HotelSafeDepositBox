import ACTION_TYPES from "./types";

const INITIAL_STATE = {
  screenStatusMessage: '',
  screenActive: false,
  safeLocked: false,
  password: '',
  savedPassword: '',
  readScreenMessage: false,
  serviceMode: false
};

export const safeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPES.SET_SCREEN_MESSAGE:
      return {
        ...state,
        screenStatusMessage: action.payload
      };
    case ACTION_TYPES.SAVE_PASSWORD:
      return {
        ...state,
        savedPassword: action.payload
      };
    case ACTION_TYPES.SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case ACTION_TYPES.SCREEN_ACTIVE:
      return {
        ...state,
        screenActive: action.payload
      };
    case ACTION_TYPES.SAFE_LOCK:
      return {
        ...state,
        safeLocked: action.payload
      };
    case ACTION_TYPES.SERVICE_MODE:
      return {
        ...state,
        serviceMode: action.payload
      }
    case ACTION_TYPES.READ_SCREEN_MESSAGE:
      return {
        ...state,
        readScreenMessage: action.payload
      }
    default:
      return state;
  }
}