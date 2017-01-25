import {app, BrowserWindow} from 'electron'
import path from 'path'
import url from 'url'
const ROOT_PATH = 'file://' + path.resolve('');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
function createWindow () {
  win = new BrowserWindow({width: 800, height: 600})
  win.loadURL(`${ROOT_PATH}/app/renderer/index.html`)
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
