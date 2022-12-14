
let p = document.getElementById('ponit')
let text = document.getElementById('text')
let flag = 1
p.onclick = function () {
    if (flag) {
        text.style.color = 'blue'
        flag = 0
    } else {
        text.style.color = 'red'
        flag = 1
    }

}
// 读取文件
var fs = require('fs')
window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function () {
        fs.readFile('cc.txt', 'utf-8', (err, data) => {
            mybaby.innerHTML = data
        })
    }
}
//打开新窗口
// const newWin = null
const btn1 = this.document.querySelector('#btn1')
// 使用remote
const { BrowserWindow, Menu, getCurrentWindow, dialog } = require('@electron/remote')
btn1.onclick = function () {
    newWin = new BrowserWindow({
        width: 500,
        height: 500,
    })
    newWin.loadFile('yellow.html')
    newWin.on('closed', () => {
        newWin = null
    })
}
// 右键菜单
var rigthTemplate = [
    { label: '粘贴' },
    { label: '复制' }
]
var m = Menu.buildFromTemplate(rigthTemplate)
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    m.popup({
        window: getCurrentWindow()
    })
})

//使用shell在浏览器中打开
var { shell, clipboard } = require('electron')
var aHref = document.querySelector('#aHref')
aHref.onclick = function (e) {
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}
//打开子窗口
var btn2 = document.querySelector('#btn2')
btn2.onclick = function () {
    window.open('popup.page.html')
}
window.addEventListener('message', (msg) => {
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg.data)
})
// 对话框
var openBtn = document.querySelector('#openBtn')
openBtn.onclick = function () {
    dialog.showOpenDialog({
        title: '请选择图片',
        defaultPath: 'xiaojiejie.jpg',
        buttonLabel: '打开图片',
        filters: [{
            name: 'img', extensions: ['jpg']
        }]
    }).then(res => {
        var images = document.querySelector('#images')
        images.setAttribute('src', res.filePaths[0])
    }).catch(err => {
        console.log(err);
    })
}
// 保存文件对话框
var saveBtn = document.querySelector('#saveBtn')
saveBtn.onclick = function () {
    dialog.showSaveDialog({
        title: '保存文件',
    }).then(res => {
        fs.writeFileSync(res.filePath, '文件内容')
    }).catch(err => {
        console.log(err);
    })
}
// 弹出对话框
var messageBtn = document.querySelector('#messageBtn')
messageBtn.onclick = function () {
    dialog.showMessageBox({
        type: 'info',
        title: '标题',
        message: '弹出框内容',
        buttons: ['确定', '取消'],
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}
// 断网提醒
window.addEventListener('online', function () {
    this.alert('网络已连接')
})
window.addEventListener('offline', function () {
    this.alert('网络已断开')
})
//通知消息
var notifyBtn = document.querySelector('#notifyBtn')
var notification = {
    title: '标题',
    icon:'xiaojiejie.jpg',
    body: '内容',
    replyPlaceholder: 'llll'
}
notifyBtn.onclick = function () {
    console.log(process.platform);
    new Notification(notification.title,notification)
} 
// 复制
var code = document.querySelector('#code')
var copyBtn = document.querySelector('#copyBtn')
copyBtn.onclick = function(){
    clipboard.writeText(code.innerHTML)
    alert('复制成功')
}