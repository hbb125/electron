console.log('hello world!')

// document.body.addEventListener('click', () => {
//   console.log('hello vscode!')
// })
let p = document.getElementById('ponit')
let text = document.getElementById('text')
let flag = 1
console.log(p);

p.onclick = function () {
    console.log('hello vscode');
    if (flag) {
        text.style.color = 'blue'
        flag = 0
    } else {
        text.style.color = 'red'
        flag = 1
    }

}