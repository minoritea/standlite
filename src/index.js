import {app, BrowserWindow} from "electron";
let mw = null;

function createWindow() {
  mw = new BrowserWindow({width: 480, height: 960, "node-integration": false});
  mw.loadURL("https://mobile.twitter.com/");
  mw.on("closed", () => {mw = null});
}

app.on("window-all-closed", () => { if (process.platform != "darwin") app.quit() });
app.on("ready", createWindow);
app.on("activate", () => { if (mw == null) createWindow() });
