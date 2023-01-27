import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  WebPreferences,
} from 'electron';
import Store from 'electron-store';

/**
 * createWindow, a function to create and return an electron browser window
 * @param {string} windowName the name to give the window
 * @param {BrowserWindowConstructorOptions} options  the options to apply to the window
 * @returns {BrowserWindow} a browser window with the specified options
 */
export default function createWindow(
  windowName: string,
  options: BrowserWindowConstructorOptions & WebPreferences,
): BrowserWindow {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store({ name });
  const defaultSize = {
    width: options.width,
    height: options.height,
  };
  let state = {};
  let window: BrowserWindow;

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = window.getPosition();
    const size = window.getSize();

    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  const windowWithinBounds = (windowState, bounds) =>
    windowState.x >= bounds.x &&
    windowState.y >= bounds.y &&
    windowState.x + windowState.width <= bounds.x + bounds.width &&
    windowState.y + windowState.height <= bounds.y + bounds.height;

  const resetToDefaults = () => {
    const { bounds } = screen.getPrimaryDisplay();

    return {
      ...defaultSize,
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    };
  };

  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen
      .getAllDisplays()
      .some((display) => windowWithinBounds(windowState, display.bounds));

    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const saveState = () => {
    if (!window.isMinimized() && !window.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }

    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const browserOptions: BrowserWindowConstructorOptions = {
    ...options,
    ...state,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences,
    },
  };

  window = new BrowserWindow(browserOptions);

  window.on('close', saveState);

  return window;
}
