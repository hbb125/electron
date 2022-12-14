const { app, BrowserWindow } = require('electron')
// 配置remote
const remote = require('@electron/remote/main')
remote.initialize()

var win = null
app.on('ready', () => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: { // 处理require报undefined
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })
    // 配置remote
    remote.enable(win.webContents)

    //开启开发者工具
    win.webContents.openDevTools()
    win.loadFile('index.html')
    win.on('closed', () => {
        win = null
    })

    app.setAppUserModelId(process.execPath);
    //引入menu菜单
    // require('./main/menu.js')
})
// const createWindow = () => {
//    const win = new BrowserWindow({
//         width: 800,
//         height: 600,
//     })

//     win.loadFile('index.html')
//     win.on('closed', () => {
//         win = null
//     })
// }

// app.whenReady().then(() => {
//     createWindow()
// })