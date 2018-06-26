// Basic stuff picked up from https://github.com/electron-userland/electron-webpack-quick-start
const { app, BrowserWindow } = require('electron');
const Url = require('url');
const path = require('path');

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

function createMainWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 242,
    resizable: false,
    maximizable: false,
    icon: path.join(__dirname, 'app', 'assets', 'images', 'icon.png')
  });

  window.loadURL(Url.format({
    pathname: path.join(__dirname, 'dist', 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  window.on('closed', () => {
    mainWindow = null;
  });

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});
